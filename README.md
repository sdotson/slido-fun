#slido-fun

The purpose of this CLI is to make slido question time more fun and interesting for all involved.

##Installation

```
git clone https://github.va.opower.it/stuart-dotson/slido-fun
npm install
npm link
```

##Use

Just use the command yo.

###Arguments
#### Options
|Parameter|Description|Default Value|Required|
|---|---|---|---|
|`-e`|Slido Event ID|none|true|
|`-q`|Slido question ID|none|true|
|`-r`|number of up votes|`1`|false|

##Example
####Upvote your favorite question 763350 for event 73371 10 number of times
```
slido-fun -e 73371 -q 763350 -r 10
```
