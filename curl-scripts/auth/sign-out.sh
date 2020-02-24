curl "https://mspockets.github.io/ork-client/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application.json"

echo
