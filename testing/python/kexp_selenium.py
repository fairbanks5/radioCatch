from selenium import webdriver

driver = webdriver.PhantomJS()
driver.get("http://kexp.org/s/s.aspx?x=3")
html_source = driver.page_source
print html_source
