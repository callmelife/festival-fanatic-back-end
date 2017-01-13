#!/bin/bash

API="http://localhost:4741"
URL_PATH="/festivals"
TOKEN="ENwpbfKplYaUCyRassGh26CU+WU/78jbJFqEyUAQuAw=--T13W5HnYgmCrxjhqoP5qGwFkiT7/PzYrMpPvEt2OcKY="
TITLE="EXAMPLE"
DESCRIPTION="A gathering of wild animals"
GENRE="EDM"
LOCATION="NYC"
VENUE="Randal's Island"
URL="http://electriczoofestival.com/wp-content/uploads/2016/02/EZooWildIsland_Facebook_Share_1200X630.jpg"
PRICE=100
DATE="5/15/2016"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
