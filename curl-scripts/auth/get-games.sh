curl "https://mspockets.github.io/ork-client/games" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application.json"

echo