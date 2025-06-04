echo "Creating zip for layer"
zip -r layer.zip nodejs

echo "Creating zip for GET Function"
cd LambdaFunctionsWithLayer/get
zip -r get.zip index.mjs
mv get.zip ../../
cd ../..

echo "Success!"