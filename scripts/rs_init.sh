#!/bin/bash

chmod +x /scripts/rs_init.sh &&
chmod +x /scripts/init.js &&
chmod +x /scripts/init_db.js

mongosh <<EOF
var config = {
    "_id": "replika",
    "version": 1,
    "members": [
        {
            "_id": 0,
            "host": "mongodb1:27017",
            "priority": 2
        },
        {
            "_id": 1,
            "host": "mongodb2:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config);
EOF

sleep 15

mongosh < /scripts/init.js
mongosh < /scripts/init_db.js
