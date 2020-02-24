curl "https://mspockets.github.io/tic-tac-toe/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"\
  --header "Content-Type: application/json" \
  --data ' {
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
      }
    }'

echo