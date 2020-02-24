curl "https://mspockets.github.io/tic-tac-toe/games" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application.json"

echo