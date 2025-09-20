gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDBoundaryObjects1= [];
gdjs.Untitled_32sceneCode.GDBoundaryObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDJumpTextObjects1= [];
gdjs.Untitled_32sceneCode.GDJumpTextObjects2= [];
gdjs.Untitled_32sceneCode.GDBackground1Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground1Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground2Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground2Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground3Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground3Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground4Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground4Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground5Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground5Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground6Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground6Objects2= [];
gdjs.Untitled_32sceneCode.GDBackground7Objects1= [];
gdjs.Untitled_32sceneCode.GDBackground7Objects2= [];
gdjs.Untitled_32sceneCode.GDEnemyText2Objects1= [];
gdjs.Untitled_32sceneCode.GDEnemyText2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.asyncCallback11672220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt2.wav", false, 50, 1);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11672220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gameplay.mp3", 0, false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Stone1"), gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[i].isCollidingWithPoint((( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Stone1"), gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[i].isCollidingWithPoint((( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[k] = gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11672148);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Animation").setAnimationName("GoLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Animation").setAnimationName("TurnLeft");
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDJumpTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDJumpTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyText2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595Stone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDJumpTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDJumpTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackground7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackground7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyText2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
