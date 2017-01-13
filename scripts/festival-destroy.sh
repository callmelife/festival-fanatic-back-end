
API="http://localhost:4741"
URL_PATH="/festivals"
ID="58791e0c550450daf3dd244e"
TOKEN="ENwpbfKplYaUCyRassGh26CU+WU/78jbJFqEyUAQuAw=--T13W5HnYgmCrxjhqoP5qGwFkiT7/PzYrMpPvEt2OcKY="

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
