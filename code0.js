gdjs.SceneCode = {};
gdjs.SceneCode.GDTextObjects1= [];
gdjs.SceneCode.GDTextObjects2= [];
gdjs.SceneCode.GDNewObjectObjects1= [];
gdjs.SceneCode.GDNewObjectObjects2= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};


gdjs.SceneCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.SceneCode.GDTextObjects1.createFrom(runtimeScene.getObjects("Text"));
{gdjs.evtTools.network.jsonToVariableStructure("{" + "\"Line1\":\"ToString(Variable(score))\"," + "\"Line2\":\"감자\"," + "\"Line3\":\"고구마\"," + "\"Line4\":\"몬수터\"," + "\"Line5\":\"아자\"" + "}", runtimeScene.getVariables().get("Object"));
}{for(var i = 0, len = gdjs.SceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Object").getChild("Line1")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Object").getChild("Line2")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Object").getChild("Line3")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Object").getChild("Line4")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Object").getChild("Line5")));
}
}{gdjs.evtTools.network.sendHttpRequest("", "data.json", "", "GET", "", runtimeScene.getVariables().get("RawNews"));
}{runtimeScene.getVariables().get("data_json").setString("RawNews");
}{for(var i = 0, len = gdjs.SceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDNewObjectObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("data_json").getChild("title")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("data_json").getChild("content")));
}
}}

}


}; //End of gdjs.SceneCode.eventsList0xb4be0


gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDTextObjects1.length = 0;
gdjs.SceneCode.GDTextObjects2.length = 0;
gdjs.SceneCode.GDNewObjectObjects1.length = 0;
gdjs.SceneCode.GDNewObjectObjects2.length = 0;

gdjs.SceneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['SceneCode'] = gdjs.SceneCode;
