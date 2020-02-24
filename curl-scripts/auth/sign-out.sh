curl "https://mspockets.github.io/tic-tac-toe/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application.json"

echo
