---
title: UPDATE
sidebarDepth: 1
---

## Using Upsert
Upsert might be the best uption when updating data because it updates or inserts data if data doesnt exist.
```php
// Query Builder
DB::collection('users')
    ->where('name', 'John')
    ->update(['age' => 20, 'address' => 'philippines'], ['upsert' => true]);

// Eloquent
$user->update(['age' => 20, 'address' => 'philippines'], ['upsert' => true]);
```

## Increament and Decrement
You can also update numbers using specific collumns.
```php
Cat::where('age', 3)
    ->increment('age', 1, ['group' => 'Kitty Club']);

Car::where('weight', 300)
    ->decrement('weight', 100, ['latest_change' => 'carbon fiber']);
```

## Projections
You can apply projections to your queries using the project method.
```php
DB::collection('items')
    ->project(['tags' => ['$slice' => 1]])
    ->get();

DB::collection('items')
    ->project(['tags' => ['$slice' => [3, 7]]])
    ->get();
```
Projections with Pagination
```php
$limit = 25;
$projections = ['id', 'name'];

DB::collection('items')
    ->paginate($limit, $projections);
```