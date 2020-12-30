---
title: CREATE / INSERT
sidebarDepth: 1
---

## Create - Insert new data
To create/Insert a new data is by using the create function.
```php
User::create(['username' => 'john123', 'email' => 'john123@gmail.com']);
```

## Upsert - Updates or Insert
Using upsert will update data that exist and if doesnt exist it will create it.
```php
// Query Builder
DB::collection('users')
    ->where('name', 'John')
    ->update(['age' => 20, 'address' => 'philippines'], ['upsert' => true]);

// Eloquent
$user->update(['age' => 20, 'address' => 'philippines'], ['upsert' => true]);
```

## Push - Add Items to Array Fields
If you have a field that has a type of array, you can use the `push` function.
Add items to an array.
```php
DB::collection('users')
    ->where('name', 'John')
    ->push('items', 'boots');

$user->push('items', 'boots');
```
```php
DB::collection('users')
    ->where('name', 'John')
    ->push('messages', [
        'from' => 'Jane Doe',
        'message' => 'Hi John',
    ]);

$user->push('messages', [
    'from' => 'Jane Doe',
    'message' => 'Hi John',
]);
```
If you DON'T want duplicate items, set the third parameter to true:
```php
DB::collection('users')
    ->where('name', 'John')
    ->push('items', 'boots', true);

$user->push('items', 'boots', true);
```

## Insert Dates to date type fields
To insert a date is to set your field to be date type by declaring this inside your model class:
```php
use Jenssegers\Mongodb\Eloquent\Model;

class Test extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'tests';
    protected $fillable = ["title", "des", "date"];

    protected $dates = ['date']; // set date field as date
}
```
and then you can just insert a date like this ***without*** setting the `use Carbon\Carbon;` and `use \MongoDB\BSON\UTCDateTime`.
```php
Test::create([
    'title' => 'Sample Title',
    'des' => 'This is a descriptions',
    'date' => '2020-12-21' // you can insert date like this
])

```
for upsert
```php
// Query Builder
    Test::where('title', 'Sample Title')
    ->update([
            'des' => 'Update the description',
            'date' => '2020-12-22'
        ],
        ['upsert' => true]
    );
```