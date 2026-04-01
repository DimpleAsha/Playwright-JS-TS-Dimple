//advanced Xpaths-- 8 types-- 
//child, parent, grand parent, siblings, cousins

//1. Parent to child-- (parent relative XPATH)/(TagName of Child)
// //p[@class="top"]/label

//2.Gradparent to GrandChild-- (grandparent relative Xpath)//(TagName of Grand child)
//(//form[@id="login"]//label)[1] 
////form[@id="login"]//label[text()="Username"]

//3.child to Parent -- (child Relative Xapth)/parent::(parent TagName)
// //input[@id='password']/parent::p

//4.GrandChild to Grand Parent -- (GrandChildChild relative Xpath)/ancestor::(grandparent Tag Name)

// //input[@id='password']/ancestor::form

//5.