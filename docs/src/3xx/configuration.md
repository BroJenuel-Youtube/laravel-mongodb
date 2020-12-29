---
title: Configuration
sidebarDepth: 2
---
# Configuration

## Configure Database
You can use MongoDB either as the main database, either as a side database. To do so, add a new `mongodb` connection to `config/database.php`:

```php
'mongodb' => [
    'driver' => 'mongodb',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', 27017),
    'database' => env('DB_DATABASE', 'homestead'),
    'username' => env('DB_USERNAME', 'homestead'),
    'password' => env('DB_PASSWORD', 'secret'),
    'options' => [
        // here you can pass more settings to the Mongo Driver Manager
        // see https://www.php.net/manual/en/mongodb-driver-manager.construct.php under "Uri Options" for a list of complete parameters that you can use

        'database' => env('DB_AUTHENTICATION_DATABASE', 'admin'), // required with Mongo 3+
    ],
],
```

For multiple servers or replica set configurations, set the host to an array and specify each server host:

```php
'mongodb' => [
    'driver' => 'mongodb',
    'host' => ['server1', 'server2', ...],
    ...
    'options' => [
        'replicaSet' => 'rs0',
    ],
],
```

If you wish to use a connection string instead of full key-value params, you can set it so. Check the documentation on MongoDB's URI format: https://docs.mongodb.com/manual/reference/connection-string/

```php
'mongodb' => [
    'driver' => 'mongodb',
    'dsn' => env('DB_DSN'),
    'database' => env('DB_DATABASE', 'homestead'),
],
```



## Configure Multiple Database
If you wish to use multiple database like sql and mongodb you can also be able to do it.
```php
//exampple
return [
    'default' => 'sql_db_one',
    'connections' => [
        'sql_db_one' => [
            'driver' => 'mysql',
            'host' => env('DB_ONE_HOST', ''),
            'port' => env('DB_ONE_PORT', ''),
            'database' => env('DB_ONE_DATABASE', ''),
            'username' => env('DB_ONE_USERNAME', ''),
            'password' => env('DB_ONE_PASSWORD', ''),
            'charset' => env('DB_CHARSET'),
            'collation' => env('DB_COLLATION'),
            'prefix' => '',
            'timezone' => env('DB_TIMEZONE'),
            'strict' => env('DB_STRICT_MODE')
        ],
        'sql_db_two' => [
            'driver' => 'mysql',
            'host' => env('DB_TWO_HOST', ''),
            'port' => env('DB_TWO_PORT', ''),
            'database' => env('DB_TWO_DATABASE', ''),
            'username' => env('DB_TWO_USERNAME', ''),
            'password' => env('DB_TWO_PASSWORD', ''),
            'charset' => env('DB_CHARSET'),
            'collation' => env('DB_COLLATION'),
            'prefix' => '',
            'timezone' => env('DB_TIMEZONE'),
            'strict' => env('DB_STRICT_MODE')
        ],
        'my_mongodb' => array(
            'driver'   => 'mongodb',
            'host'     => env('MONGO_HOST', 'localhost'),
            'port'     => env('MONGO_PORT', 27017),
            'username' => env('MONGO_USERNAME', ''),
            'password' => env('MONGO_PASSWORD', ''),
            'database' => env('MONGO_DATABASE', ''),
            'options' => array(
                'db' => env('MONGO_AUTHDATABASE', '') //Sets the auth DB
            )
        ),
    ],
    'migrations' => 'migrations',
];
```
In your mongo model, you need to set the connection for the model.
```php
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class User extends Eloquent {
    protected $connection = 'mongodb'; //set the connection
    protected $collection = 'core_users'; //set what is the table object name

    public function get_user($telnumber) {
        $user = User::find('asdfh83yruihkajshdf');
        return $user ? $user : null;
    }
}
```