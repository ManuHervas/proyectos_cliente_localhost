import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import openpyxl as load_workbook

wb = load_workbook("excel.xlsx", data_only = True)
sh = wb["Hola1"]

driver = webdriver.Chrome()
driver.get("http://proyectos_cliente_localhost/formulario")

try:        
    element1 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "nombre"))
    )
    element2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "apellidos"))
    )
    element3 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "dni"))
    )
    element4 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "fecha"))
    )    
    submit = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "grabar"))
    )
    
    fila = 1
    caso = ""
    casos = []
    while sh["a" + str(fila).value!=""]:
        casos.append([
                    sh["a" + str(fila).value],
                    sh["b" + str(fila).value],
                    sh["c" + str(fila).value]
                ])
    fila = fila + 1
    
    for i in range(0,3):
        element1.send_keys(casos[i*4][1])
        element2.send_keys(casos[i*4+1][1])
        element3.send_keys(casos[i*4+2][1])
        element4.send_keys(casos[i*4+3][1])    
        submit.click
        respuesta = ["noValido" not in element1.get_attribute("class"),
                    "noValido" not in element2.get_attribute("class"),
                    "noValido" not in element3.get_attribute("class"),
                    "noValido" not in element4.get_attribute("class")]    
    print(respuesta)    
    time.sleep(300)
finally:
    driver.quit()