//XPATH--XML Path-- address of element in DOM-- path of the locator-- to interact with web elements we need the exact path
//if no unique CSS and more dynamic locators
//Absolute and relative
//absolute-- whole html tag of element- trverse from each and every node from root node till element we need to write everything
// starts with /-- /html/body/div[2]/div/div/form/p/input

//relative XPATH-. basic and advanced- unique element within HTML tag of the element
//starts with // -- just uses middle or inner part of DOM  -- //tagname[@attribute='Value']
//curretnode-

//input[@id = 'username']
//1.attribute based-- i.e using id, class, name
////input[@id="username"]
//input[@class="inputLogin"]

//2.text based-- 
//--//label[text()='Username']
//*[text()='Password']

//3.Partial-Text based XPATH
//-- //a[conatins(text(),'Welcome')]
// -- //a[contains(text(),'CRM')]
// -- //a[contains(text(),'Leads')]

//4.partial attriute based XPATH
//Basic Xpath – Partial Match
// -- //tagName[contains(@attribute, 'Partial value of the attribute')]
// -- //a[conatins(@class,'select')]
// -- //a[conatins(@id, 'ext')]


//5.collection based XPATHs-- multiple matches in XPATH
//(//tagName[@attribute='attributeValue'])[index]
//-create lead--- (//a[contains(@id,"ext")])[26]
//-companyName-- (//input[@class='inputBox'])[1]
