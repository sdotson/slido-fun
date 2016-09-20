#slido-fun

The purpose of this CLI is to make sli.do question time more fun and interesting for all involved. Upvote your favorite sli.do question an absurd number of times with this sli.do fun enhancement tool.

##Installation

```
git clone https://github.va.opower.it/stuart-dotson/slido-fun
npm install
npm link
```

##Instructions
You'll need two things to make this work: event id and question id. You can figure these out by visiting the sli.do event and looking at the XHR requests.

###Event ID
The event id can be found in numerous endpoints. For example, in the following the event ID would be `73777`:
```
https://app.sli.do/v0.4/events/73777/user
https://app.sli.do/v0.4/events/73777/user/activity
https://app.sli.do/v0.4/events/73777
https://app.sli.do/v0.4/events/73777/questions
```

###Question ID
The question ID can be found by digging through the JSON response of `https://app.sli.do/v0.4/events/73777/questions` or possibly a little more easily, liking a specific question and getting the ID from the endpoint. For example, in `https://app.sli.do/v0.4/events/73777/questions/768036/like` the ID would be `768036`.

###Arguments
#### Options
|Parameter|Description|Default Value|Required|
|---|---|---|---|
|`-e`|Slido Event ID|none|true|
|`-q`|Slido question ID|none|true|
|`-r`|number of up votes|`1`|false|

##Example
####Upvote your favorite question 763350 for event 73371 10 times
```
slido-fun -e 73371 -q 763350 -r 10
```
