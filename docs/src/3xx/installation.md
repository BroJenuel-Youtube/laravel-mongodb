---
title: Installation
sidebarDepth: 0
---
**Note:** Make sure you have the MongoDB PHP driver installed.
You can find installation instructions at [http://php.net/manual/en/mongodb.installation.php](http://php.net/manual/en/mongodb.installation.php)
## Install The Package
Inside your project, Install the package via Composer:
```bash
$ composer require jenssegers/mongodb
```

## Set Laravel Project
In case your Laravel version does NOT autoload the packages, add the service provider to `config/app.php`:
```php
Jenssegers\Mongodb\MongodbServiceProvider::class,
```

## Set Lumen Project
For usage with Lumen, add the service provider in `bootstrap/app.php`. In this file, you will also need to enable Eloquent. You must however ensure that your call to `$app->withEloquent();` is below where you have registered the `MongodbServiceProvider` or you can add this just above the `return $app;`:
```php
$app->register(Jenssegers\Mongodb\MongodbServiceProvider::class);
$app->withFacades(); // this optional
$app->withEloquent();
```

The service provider will register a MongoDB database extension with the original database manager. There is no need to register additional facades or objects.

When using MongoDB connections, Laravel will automatically provide you with the corresponding MongoDB objects.

## Set Non-Laravel projects
For usage outside Laravel, check out the Capsule manager and add:
```php
$capsule->getDatabaseManager()->extend('mongodb', function($config, $name) {
    $config['name'] = $name;

    return new Jenssegers\Mongodb\Connection($config);
});
```

when creating a model, use the libraries Model extention.
```php
<?php

namespace App\Models\MongoDB;

use Jenssegers\Mongodb\Eloquent\Model;

class Test extends Model {
    // functions and methods
}
```