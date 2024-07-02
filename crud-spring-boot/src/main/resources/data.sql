INSERT IGNORE INTO usuario (id, username, password, role)
VALUES (1, 'admin', '$2a$12$gz7ENRMH45kcKV7jaOc4sOh8t3yGc//ah02ppQBcEmx0mH6q.lU8m', 'ADMIN');

INSERT IGNORE INTO usuario (id, username, password, role)
VALUES (2, 'user', '$2a$12$o651COEwr8W3vAFk1S.hWeZjtx.blxUbH2Wci6AO1mDcLfAvKDLiS', 'USERS');