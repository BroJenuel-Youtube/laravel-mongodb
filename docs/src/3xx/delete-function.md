---
title: DELETE
sidebarDepth: 1
---
# Deleting Data
## Destroy / Delete
Remove specific data.
```php
$user = User::find('asd834720394djfdf')->delete();

// other sample
$test = Test::find($request->input('id'));
if ($test->delete()) return true;

// Similar operation for embeds
$user->books()->destroy($book);
```

## Pull
Remove an item from an array typed fields.
```php
DB::collection('users')
    ->where('name', 'John')
    ->pull('items', 'boots');

$user->pull('items', 'boots');
DB::collection('users')
    ->where('name', 'John')
    ->pull('messages', [
        'from' => 'Jane Doe',
        'message' => 'Hi John',
    ]);

$user->pull('messages', [
    'from' => 'Jane Doe',
    'message' => 'Hi John',
]);
```


## Unset

Remove one or more fields from a document.
```php
DB::collection('users')
    ->where('name', 'John')
    ->unset('note');

// similar to this
$user->unset('note');
```