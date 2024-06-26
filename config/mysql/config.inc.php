<?php
$cfg['Servers'][1]['host'] = getenv('PMA_HOST');
$cfg['Servers'][1]['port'] = getenv('PMA_PORT');
$cfg['Servers'][1]['user'] = getenv('MYSQL_USER');
$cfg['Servers'][1]['password'] = getenv('MYSQL_PASSWORD');
$cfg['Servers'][1]['auth_type'] = 'cookie';