docker run --rm -v %cd%/apigen-output1:/local openapitools/openapi-generator-cli generate -i http://localhost:8000 -g cpp-restsdk -o /local -p packageName=MuilProject -p apiPackage=muil.api -p modelPackage=muil.model