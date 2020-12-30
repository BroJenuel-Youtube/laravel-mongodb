---
title: Dates
sidebarDepth: 2
---
Note: We need to use this library to work on dates.
```php
use Carbon\Carbon;
use \MongoDB\BSON\UTCDateTime as DateTime;
```
## Get specific date
Getting the specific dates.
```php
$start = new DateTime(Carbon::parse($request->input('date'))->subDays(1));
$to = new DateTime(Carbon::parse($request->input('date'))->addDays(1));

$data = Test::where('date','>=', $start)
    ->where('date','<=',$to)
    ->get();

return $data;
```

## using `whereBetween`
Use whereBetween to find data in between this dates.
```php
// we use the use \MongoDB\BSON\UTCDateTime as DateTime; to make this work here.
$start = new DateTime(Carbon::parse($request->input('date_from')));
$to = new DateTime(Carbon::parse($request->input('date_to')));

$data = Test::whereBetween('date', array($start, $to))->get();

return $data;
```
## or use `where`
This works just like whereBetween but using where
```php
// we use the use \MongoDB\BSON\UTCDateTime as DateTime; to make this work here.
$start = new DateTime(Carbon::parse($request->input('date_from')));
$to = new DateTime(Carbon::parse($request->input('date_to')));

$data = Test::where('date','>=', $start)
    ->where('date','<=',$to)
    ->get();

return $data;
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