define([],function(){return[{id:"windTurbine",name:"风力发电机",description:"生产能源",group:"a",price:1,lifetime:10,refund:0,strategy:{type:"Cell",powerProduction:.15}},{id:"solarCell",name:"太阳能电池",description:"生产热量",group:"a",price:200,lifetime:100,refund:0,requiresResearch:"solarCell",strategy:{type:"Cell",heatProduction:3}},{id:"coalBurner",name:"煤炭燃烧器",description:"生产热量",group:"a",price:1e5,lifetime:400,refund:0,requiresResearch:"coalBurner",strategy:{type:"Cell",heatProduction:380}},{id:"gasBurner",name:"煤气燃烧器",description:"生产 heat",group:"a",price:4e7,lifetime:800,refund:0,requiresResearch:"gasBurner",strategy:{type:"Cell",heatProduction:75e3}},{id:"nuclearCell",name:"核元件",description:"生产热量",group:"a",price:5e8,lifetime:800,refund:0,requiresResearch:"nuclearCell",strategy:{type:"Cell",heatProduction:12e5}},{id:"nuclearCell2",name:"热核件元",description:"生产热量",group:"a",price:2e10,lifetime:800,refund:0,requiresResearch:"nuclearCell2",strategy:{type:"Cell",heatProduction:5e7}},{id:"nuclearCell3",name:"融合元件",description:"生产热量",group:"a",price:8e11,lifetime:800,refund:0,requiresResearch:"nuclearCell3",strategy:{type:"Cell",heatProduction:25e8}},{id:"nuclearCell4",name:"钍元件",description:'<img src="./img/reactors/thoriumExample.png" style="float:right;margin: 5px;"/>生产热量。分配热量到距离 2 地块。',group:"a",price:72e12,lifetime:800,refund:0,requiresResearch:"nuclearCell4",strategy:{type:"Cell",heatProduction:15e10,distributeSize:2}},{id:"nuclearCell5",name:"镤元件",description:"生产热量。分配热量到距离 2 地块。",group:"a",price:504e13,lifetime:800,refund:0,requiresResearch:"nuclearCell5",strategy:{type:"Cell",heatProduction:9e12,distributeSize:2}},{id:"nuclearCell6",name:"锔元件",description:"生产热量。分配热量到距离 3 地块。",group:"a",price:3024e14,lifetime:800,refund:0,requiresResearch:"nuclearCell6",strategy:{type:"Cell",heatProduction:63e13,distributeSize:3}},{id:"nuclearCell7",name:"铀元件",description:"生产热量。分配热量到距离 3 地块。",group:"a",price:1512e16,lifetime:800,refund:0,requiresResearch:"nuclearCell7",strategy:{type:"Cell",heatProduction:315e14,distributeSize:3,distributeType:"diagonal"}},{id:"generator",name:"发电机",description:"将热量转化为能量。",group:"b",type:"generator",price:500,maxHeat:25,refund:1,acceptsWater:!1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"solarCell",strategy:{type:"HeatToPowerConverter",convertHeatToPower:3,waterEffectiveness:0}},{id:"generator2",name:"发电机 2",description:"将热量转化为能量。",group:"b",type:"generator",price:25e5,maxHeat:150,maxWater:5e3,refund:1,acceptsWater:!0,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"gasBurner",strategy:{type:"HeatToPowerConverter",convertHeatToPower:9,waterEffectiveness:100}},{id:"generator3",name:"发电机 3",description:"将热量转化为能量。",group:"b",type:"generator",price:1e13,maxHeat:900,maxWater:8e3,refund:1,acceptsWater:!0,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"generator3",strategy:{type:"HeatToPowerConverter",convertHeatToPower:32,waterEffectiveness:200}},{id:"generator4",name:"发电机 4",description:"将热量转化为能量。",group:"b",type:"generator",price:5e16,maxHeat:2200,maxWater:22e3,refund:1,acceptsWater:!0,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"generator4",strategy:{type:"HeatToPowerConverter",convertHeatToPower:96,waterEffectiveness:400}},{id:"generator5",name:"发电机 5",description:"将热量转化为能量。",group:"b",type:"generator",price:125e17,maxHeat:4400,maxWater:44e3,refund:1,acceptsWater:!0,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"generator5",strategy:{type:"HeatToPowerConverter",convertHeatToPower:288,waterEffectiveness:1200}},{id:"heatExchanger",name:"热量交换器",description:'<img src="./img/reactors/heatExchangerExample.png" style="float:right;margin: 5px;"/>试图平衡相邻组件之间的热量',group:"b2",price:15e5,maxHeat:15e3,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"heatExchanger",strategy:{type:"HeatExchanger"}},{id:"heatInlet",name:"热量入口",type:"heatInletOutletElement",description:'<img src="./img/reactors/heatInletOutletExample.png" style="float:right;margin: 5px;"/>加热并均匀分配到每个散热口。',group:"b2",price:25e13,maxHeat:55e9,refund:1,acceptsHeat:!0,givesHeatOut:!1,requiresResearch:"undergroundHeatPipes",strategy:{type:"HeatInlet",transferHeat:38e9}},{id:"heatOutlet",name:"热量出口",type:"heatInletOutletElement",description:'<img src="./img/reactors/heatInletOutletExample.png" style="float:right;margin: 5px;"/>只从热量入口加热。 热量必须由换热器拉出。',group:"b2",price:15e13,maxHeat:55e9,refund:1,acceptsHeat:!1,givesHeatOut:!0,requiresResearch:"undergroundHeatPipes",strategy:{type:"HeatOutlet"}},{id:"isolation",name:"隔离",description:"增加发热电池的热量输出",group:"c",price:1e3,refund:1,requiresResearch:"isolation",strategy:{type:"CellHeatProductionAmplifier",heatProductionBonus:.05}},{id:"heatBattery",name:"散热器",description:"吸收热量。 不会放热，每秒都会散失一些热量。",group:"c",price:25e5,maxHeat:1e7,refund:1,acceptsHeat:!0,givesHeatOut:!1,requiresResearch:"heatBattery",strategy:{type:"HeatAbsorber",loseHeat:.05}},{id:"boilerHouse",name:"锅炉房",description:"散装散热。 如果直接接触热源会发生爆炸",group:"c",price:15e6,maxHeat:2e3,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"boilerHouse",strategy:{type:"BulkHeatToMoneyConverter",convertHeatToMoney:18e3}},{id:"battery",name:"电池",description:"增加你可以拥有的最大能量",group:"cc",price:50,refund:1,requiresResearch:"battery",strategy:{type:"MaxPowerIncrease",maxPowerIncrease:100}},{id:"waterPump",name:"水泵",description:'<img src="./img/reactors/waterPumpExample.png" style="float:right;margin: 5px;"/> 冷却发电机，使他们产生更多的能量。 必须放在水旁边。',type:"waterElement",group:"ee",price:5e9,maxWater:15e4,refund:1,onlyNextToWater:!0,acceptsWater:!0,acceptsHeat:!1,givesHeatOut:!1,requiresResearch:"waterPump",strategy:{type:"WaterPump",waterProduction:25e3,balancesWater:!0}},{id:"groundwaterPump",name:"地下水泵",description:"抽取地下水。 需要水管来分配水。",type:"waterElement",group:"ee",price:4e10,maxWater:25e4,refund:1,onlyNextToWater:!1,acceptsWater:!0,acceptsHeat:!1,givesHeatOut:!1,requiresResearch:"groundwaterPump",strategy:{type:"WaterPump",waterProduction:67500,balancesWater:!1}},{id:"waterPipe",name:"水管",description:"扩大水泵的有效面积。",type:"waterElement",group:"ee",price:15e8,maxWater:1e5,refund:1,acceptsWater:!0,acceptsHeat:!1,givesHeatOut:!1,requiresResearch:"waterPipe",strategy:{type:"WaterExchanger"}},{id:"circulator",name:"循环器",description:"通过发电机更快地移动水，从而增加发电机的最大水量。",group:"ee",price:25e16,refund:1,requiresResearch:"circulator",strategy:{type:"Circulator",maxWaterBonus:.9}},{id:"office",name:"家庭办公室",description:"销售风力涡轮机或其他组件产生的少量电力。",type:"office",group:"d",price:50,maxHeat:10,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"office",strategy:{type:"PowerToMoneyConverter",maxSellPower:5}},{id:"office2",name:"小型办公室",description:"出售能源",type:"office",group:"d",price:1e5,maxHeat:10,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"office2",strategy:{type:"PowerToMoneyConverter",maxSellPower:100}},{id:"office3",name:"中型办公室",description:"出售能源",type:"office",group:"d",price:5e8,maxHeat:10,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"office3",strategy:{type:"PowerToMoneyConverter",maxSellPower:2500}},{id:"office4",name:"大型办公室",description:"出售能源",type:"office",group:"d",price:1e10,maxHeat:10,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"office4",strategy:{type:"PowerToMoneyConverter",maxSellPower:6e4}},{id:"office5",name:"巨大的办公室",description:"出售能源",type:"office",group:"d",price:1e15,maxHeat:10,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"office5",strategy:{type:"PowerToMoneyConverter",maxSellPower:9e5}},{id:"bank",name:"银行",description:"促进办公室销售",group:"d",price:4e12,maxHeat:1,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"bank2",strategy:{type:"Bank",sellAmountBonus:1.5}},{id:"researchCenter",name:"研究中心",description:"给你研究点，你可以研究新技术",type:"researchCenter",group:"e",price:100,maxHeat:1,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"researchCenter",strategy:{type:"ResearchCenter",researchProduction:1}},{id:"researchCenter2",name:"高级研究中心",description:"给你研究点，你可以研究新技术",type:"researchCenter",group:"e",price:1e7,maxHeat:100,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"researchCenter2",strategy:{type:"ResearchCenter",researchProduction:8}},{id:"researchCenter3",name:"超级研究中心",description:"给你研究点，你可以研究新技术",type:"researchCenter",group:"e",price:504e13,maxHeat:100,refund:1,acceptsHeat:!0,givesHeatOut:!0,requiresResearch:"researchCenter3",strategy:{type:"ResearchCenter",researchProduction:40}}]})
