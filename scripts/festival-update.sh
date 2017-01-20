API="http://localhost:4741"
URL_PATH="/festivals"
ID="58826d1c999c13a9ccaa5c6c"
TOKEN="cBfJs5rByV/CEBtislefO+iC2oPGBfm3MzJVtlKxvFk=--e68uZKDKSOJNi3fcInH8UjDDwAuzBi1V9AO4AM1VHyw="
TITLE="CHANGED TITLE"
DESCRIPTION="A gathering of wild animals"
GENRE="EDM"
LOCATION="NYC"
VENUE="Randal's Island"
URL="google.com"
PRICE=100
DATE="5/15/2016"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "festival": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "genre": "'"${GENRE}"'",
      "location": "'"${LOCATION}"'",
      "venue": "'"${VENUE}"'",
      "url": "'"${URL}"'",
      "price": "'"${PRICE}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
