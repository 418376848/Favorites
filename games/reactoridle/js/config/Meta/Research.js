define([],function(){return[{id:"researchCenter",group:"1",name:"研究中心",description:"生产研究点",price:100,max:1},{id:"researchCenter2",group:"1",name:"高级研究中心",description:"生产更多研究点",requiresResearch:"gasBurner",priceResearchPoints:3e6,max:1},{id:"researchCenter3",group:"1",name:"超级研究中心",description:"生产更多研究点",requiresResearch:"nuclearCell5",priceResearchPoints:125e15,max:1},{id:"office",group:"1",name:"办公室",description:"自动出售能源",requiresResearch:"researchCenter",priceResearchPoints:500,max:1},{id:"office2",group:"1",name:"办公室 2",description:"更大的办公室可以卖出更多的能量。",requiresResearch:"coalBurner",priceResearchPoints:5e4,max:1},{id:"office3",group:"1",name:"办公室 3",description:"更大的办公室可以卖出更多的能量。",requiresResearch:"nuclearCell",priceResearchPoints:4e8,max:1},{id:"office4",group:"1",name:"办公室 4",description:"更大的办公室可以卖出更多的能量。",requiresResearch:"nuclearCell2",priceResearchPoints:1e10,max:1},{id:"office5",group:"1",name:"办公室 5",description:"更大的办公室可以卖出更多的能量。",requiresResearch:"nuclearCell4",priceResearchPoints:4e13,max:1},{id:"bank2",group:"1",name:"银行",description:"促进办公室销售",requiresResearch:"nuclearCell3",priceResearchPoints:3e11,max:1},{id:"chronometer",group:"1",name:"天文台更新",description:"+1 收入每秒加",requiresResearch:"researchCenter",priceResearchPoints:1e4,priceIncrease:1e3,max:5},{id:"battery",group:"c",name:"电池",description:"电池可增加反应堆的最大功率。",requiresResearch:"windTurbineAutoRebuild",priceResearchPoints:250,max:1},{id:"isolation",group:"c",name:"隔离",description:"隔离增加了相邻元件的热量输出。",requiresResearch:"solarCell",priceResearchPoints:12e3,max:1},{id:"heatExchanger",group:"c",name:"热交换器",description:"在相邻元件之间传递热量。",requiresResearch:"gasBurner",priceResearchPoints:15e4,max:1},{id:"undergroundHeatPipes",group:"c",name:"地下热管",icon:"heatInlet",description:"没有庞大的管网热分布",requiresResearch:"nuclearCell4",priceResearchPoints:2e14,max:1},{id:"heatBattery",group:"c",name:"散热器",description:"拥有巨大的热量。",requiresResearch:"heatExchanger",priceResearchPoints:1e6,max:1},{id:"boilerHouse",group:"c",name:"锅炉房",description:"从散热器吸收热量并散装销售。",requiresResearch:"heatBattery",priceResearchPoints:5e6,max:1},{id:"waterPump",group:"c",name:"水泵",description:"冷却发电机，使他们产生更多的动力。",requiresResearch:"nuclearCell2",priceResearchPoints:6e9,max:1},{id:"waterPipe",group:"c",name:"水管",description:"扩大水泵有效面积",requiresResearch:"waterPump",priceResearchPoints:2e9,max:1},{id:"groundwaterPump",group:"c",name:"地下水泵",description:"冷却发电机，使他们产生更多的能量。",requiresResearch:"nuclearCell3",priceResearchPoints:12e11,max:1},{id:"generator3",group:"c",name:"发电机 3",description:"将大量的热量转化为能量。",requiresResearch:"nuclearCell3",priceResearchPoints:25e12,max:1},{id:"generator4",group:"c",name:"发电机 4",description:"将大量的热量转化为能量。",requiresResearch:"nuclearCell4",priceResearchPoints:625e12,max:1},{id:"circulator",group:"c",name:"循环器",description:"会增加邻近于它的发电机最大水量。",requiresResearch:"nuclearCell5",priceResearchPoints:125e13,max:1},{id:"generator5",group:"c",name:"循环器 5",description:"将大量的热量转化为能量。",requiresResearch:"nuclearCell6",priceResearchPoints:6875e13,max:1},{id:"nuclearCell7",group:"a",name:"铀元件",description:"打开铀技术",requiresResearch:"nuclearCell6",priceResearchPoints:625e16,max:1},{id:"nuclearCell7AutoRebuild",group:"a",name:"铀元件人。",description:"铀元件会自动更换。",icon:"nuclearCell7",requiresResearch:"nuclearCell7",priceResearchPoints:8e17,max:1},{id:"nuclearCell6",group:"a",name:"锔元件",description:"开启锔技术",requiresResearch:"nuclearCell5",priceResearchPoints:125e15,max:1},{id:"nuclearCell6AutoRebuild",group:"a",name:"锔元件人.",description:"锔元件自动替换。",icon:"nuclearCell6",requiresResearch:"nuclearCell6",priceResearchPoints:8e15,max:1},{id:"nuclearCell5",group:"a",name:"镤元件",description:"开启镤技术",requiresResearch:"nuclearCell4",priceResearchPoints:25e14,max:1},{id:"nuclearCell5AutoRebuild",group:"a",name:"镤元件人",description:"镤元件会自动更换。",icon:"nuclearCell5",requiresResearch:"nuclearCell5",priceResearchPoints:8e13,max:1},{id:"nuclearCell4",group:"a",name:"钍元件",description:"开启钍技术",requiresResearch:"nuclearCell3",priceResearchPoints:5e13,max:1},{id:"nuclearCell4AutoRebuild",group:"a",name:"钍元件经理",description:"钍元件会自动更换。",icon:"nuclearCell4",requiresResearch:"nuclearCell4",priceResearchPoints:8e11,max:1},{id:"nuclearCell3",group:"a",name:"融合元件",description:"开启融合技术",requiresResearch:"nuclearCell2",priceResearchPoints:5e11,max:1},{id:"nuclearCell3AutoRebuild",group:"a",name:"融合元件经理",description:"融合元件会自动更换。",icon:"nuclearCell3",requiresResearch:"nuclearCell3",priceResearchPoints:8e9,max:1},{id:"nuclearCell2",group:"a",name:"高热原子核反应元件",description:"开启高热原子核反应技术",requiresResearch:"nuclearCell",priceResearchPoints:5e9,max:1},{id:"nuclearCell2AutoRebuild",group:"a",name:"高热原子核反应元件经理",description:"高热原子核反应元件会自动更换。",icon:"nuclearCell2",requiresResearch:"nuclearCell2",priceResearchPoints:2e9,max:1},{id:"nuclearCell",group:"a",name:"核元件",description:"开启核技术",requiresResearch:"gasBurner",priceResearchPoints:2e8,max:1},{id:"nuclearCellAutoRebuild",group:"a",name:"核元件经理",description:"核元件会自动更换。",icon:"nuclearCell",requiresResearch:"nuclearCell",priceResearchPoints:1e8,max:1},{id:"gasBurner",group:"a",name:"煤气燃烧器",description:"开启煤气技术",requiresResearch:"coalBurner",priceResearchPoints:2e6,max:1},{id:"gasBurnerAutoRebuild",group:"a",name:"煤气燃烧器经理",description:"燃气燃烧器自动更换。",icon:"gasBurner",requiresResearch:"gasBurner",priceResearchPoints:1e6,max:1},{id:"coalBurner",group:"a",name:"煤炭燃烧器",description:"开启煤炭技术",requiresResearch:"solarCell",priceResearchPoints:5e4,max:1},{id:"coalBurnerAutoRebuild",group:"a",name:"煤炭燃烧器经理",description:"煤炭燃烧器会自动更换。",icon:"coalBurner",requiresResearch:"coalBurner",priceResearchPoints:15e3,max:1},{id:"solarCell",group:"a",name:"太阳能电池",description:"开启太阳能电池技术",requiresResearch:"researchCenter",priceResearchPoints:2500,max:1},{id:"solarCellAutoRebuild",group:"a",name:"太阳能电池经理",description:"太阳能电池会自动更换。",icon:"solarCell",requiresResearch:"solarCell",priceResearchPoints:1e3,max:1},{id:"windTurbineAutoRebuild",group:"a",name:"风力涡轮机经理",description:"风力涡轮机会自动更换。",icon:"windTurbine",requiresResearch:"researchCenter",priceResearchPoints:100,max:1}]})
