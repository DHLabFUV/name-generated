import pandas as pd
import time
import json

'''
This program finds the meaning of the input name
'''
van_mau =  "Xin lỗi, chúng mình chưa có dữ liệu về tên của bạn. Bạn có thể hỗ trợ chúng mình bằng cách điền vào khảo sát bên dưới! ^-^"

def find_meaning(filename, fullname):
    '''
        This function return related data of the input name.
        
        Parameter:
            - filename str: directory of the csv data file
            - fullname str: fullname
    '''
    name = fullname.lower().split()
    pf = pd.read_csv(filename).fillna("")
    left = 0
    right = len(pf) - 1
    
    if len(name) > 1: #user input more than 1 words 
        name = ' '.join(name[-2:]) #only assess the firstname

        result = pf[pf['name-double'] == name]
        single = False

    else: #user only input 1 word 
        name = name[0] 
        result = pf[pf['name-single2'] == name]
        single = True

    if result.shape[0] == 0:
        return json.dumps({"name-double": "",
                           "meaning": van_mau,
                           "name-single1": "", "sinovietnamese1": "", "radical1": "", "image1": "",
                           "name-single2": "", "sinovietnamese2": "", "radical2": "", "image2": ""})
    
    elif single:
        result = result.iloc[0].to_dict()
        result['name-double'] = result['radical2']
        result['name-single1'] = ''
        result['sinovietnamese1'] = ''
        result['image1'] = ''
        
        return json.dumps(result)
    
    else:
        return result.iloc[0].to_json()

def search(pf, name, column):
    '''
    This function look for the related data for the iput name in the database.
    Parameter:
        - pf: the dataframe of the database
        - name str: name
        - column str: name of the column to be compared to the name
    '''
    for i in pf.index:
        if pf[column][i] == name:
            return i
    return -1

def main():
    '''
    testing 
    '''
    print(find_meaning('name_explainer/api/final.csv',"An"))
    
if __name__ == '__main__':
        main()