/************************************************
 *
 * Amysql AMS
 * Amysql.com 
 * @param Object 
 * AmysqlHomeMain  
 *
 */


// 数据表主对象 **************************
var HomeMain = function ()
{
	this.LocalhostDom = G('localhost');
	this.ContentBlock = G('ContentBlock');

	with(this)
	{
		LocalhostDom.onclick = function ()
		{
			parent.parent.AmysqlLeft.AmysqlLeftList.Logo.onclick();
			return false;
		}
	}

	// 运行
	this.run = function ()
	{

		// 扩展相关 *************************
		if(Cookies.get('ContentExtendManage') == null ) 
		{
			var exp = new Date();
			exp.setTime(exp.getTime()*1.1);
			Cookies.set('ContentExtendManage', ' ', exp, '/');
		}
		
		// 扩展加载
		for (var k in ExtendArray )
		{
			if(ExtendArray[k]._Events && !ExtendArray[k]._del)
			{
				for (var ke in ExtendArray[k]._Events)
				{
					if(Cookies.get('ContentExtendManage').indexOf('|' + ExtendArray[k]._ExtendInfo.ExtendId + '|') == -1)
						AddEvent(ExtendArray[k]._Events[ke]._Event, ExtendArray[k]._Events[ke]._EventObj);
				}
			}
		}
	}
}



// 运行开启 *****************************************

var NavigationObject = new Navigation();				// 导航对象
var AmysqlMenuObject = new AmysqlMenu();				// 菜单对象
var SqlSubmitFormObject = new AmysqlSqlSubmitForm();	// Sql表单提交对象
var HomeMainObject = new HomeMain();					// 数据表主对象
HomeMainObject.run();									// 运行





