const express = require("express");
const router = express.Router();

const teamMember = [
  {
    name: "Yang",
    age: 30,
    hometown: "Anyang",
  },
];

/**
 *  @swagger
 *  paths:
 *   /member:
 *     post:
 *       summary: Create a member
 *       tags: [Member]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MemberDto'
 *       responses:
 *         "200":
 *           description: The member updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/MemberDto'
 */

router.post("/", (req, res) => {
  teamMember.push({
    name: req.body.name ?? "",
    age: req.body.age ?? 0,
    hometown: req.body.hometown ?? "",
  });

  res.status(200).send(teamMember);
});

/**
 *  @swagger
 *  paths:
 *   /member:
 *     get:
 *       summary: Read lists of all members
 *       tags: [Member]
 *       responses:
 *         "200":
 *           description: The list of all members
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/MemberDto'
 */

router.get("/", (req, res) => {
  res.status(200).send(teamMember);
});

/**
 *  @swagger
 *  paths:
 *   /{name}:
 *     patch:
 *       summary: Update an existing member
 *       tags: [Member]
 *       parameters:
 *       - name: name
 *         in: path
 *         description: Name of the existing member
 *         required: true
 *         schema:
 *           type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                   format: int32
 *                 hometown:
 *                   type: string
 *       responses:
 *         "200":
 *           description: The member updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/MemberDto'
 */

router.patch("/:name", (req, res) => {
  const index = teamMember.findIndex(
    (member) => member.name === req.params.name
  );

  if (index < 0) res.status(400).send("BAD_REQUEST");

  teamMember[index] = {
    name: req.body.name ?? "",
    age: req.body.age ?? 0,
    hometown: req.body.hometown ?? "",
  };

  res.send(teamMember[index]);
});

/**
 *  @swagger
 *  paths:
 *   /{name}:
 *     delete:
 *       summary: Update an existing member
 *       tags: [Member]
 *       parameters:
 *       - name: name
 *         in: path
 *         description: Name of the existing member
 *         required: true
 *         schema:
 *           type: string
 *       responses:
 *         "200":
 *           description: The list of all members
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/MemberDto'
 */

router.delete("/:name", (req, res) => {
  const index = teamMember.findIndex(
    (member) => member.name === req.params.name
  );

  if (index < 0) res.status(400).send("BAD_REQUEST");

  teamMember.splice(index, 1);

  res.send(teamMember);
});

module.exports = router;

/**
 * @swagger
 *     components:
 *         schemas:
 *             MemberDto:
 *                 type: object
 *                 required:
 *                     - name
 *                     - age
 *                     - hometown
 *                 properties:
 *                     name:
 *                         type: string
 *                         description: Name of a member.
 *                     age:
 *                         type: integer
 *                         description: Age of a member.
 *                     hometown:
 *                         type: string
 *                         description: Hometown of a member.
 */

/**
 *  @swagger
 *  tags:
 *    name: Member
 *    description: Member apis.
 */
