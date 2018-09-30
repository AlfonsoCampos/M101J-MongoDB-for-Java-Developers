mkdir \data\rs1 \data\rs2 \data\rs3
mkdir \data\log
start \Program Files\MongoDB 2.6 Standard\bin\mongod --replSet m101 --logpath \data\log\1.log --dbpath \data\rs1 --port 27017 --smallfiles --oplogSize 64
start \Program Files\MongoDB 2.6 Standard\bin\mongod --replSet m101 --logpath \data\log\2.log --dbpath \data\rs2 --port 27018 --smallfiles --oplogSize 64
start \Program Files\MongoDB 2.6 Standard\bin\mongod --replSet m101 --logpath \data\log\3.log --dbpath \data\rs3 --port 27019 --smallfiles --oplogSize 64