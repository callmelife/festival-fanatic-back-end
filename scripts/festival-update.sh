API="http://localhost:4741"
URL_PATH="/festivals"
ID="58791e73550450daf3dd244f"
TOKEN="ENwpbfKplYaUCyRassGh26CU+WU/78jbJFqEyUAQuAw=--T13W5HnYgmCrxjhqoP5qGwFkiT7/PzYrMpPvEt2OcKY="
TITLE="CHANGED TITLE"
DESCRIPTION="A gathering of wild animals"
GENRE="EDM"
LOCATION="NYC"
VENUE="Randal's Island"
URL="http://electriczoofestival.com/wp-content/uploads/2016/02/EZooWildIsland_Facebook_Share_1200X630.jpg"
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
