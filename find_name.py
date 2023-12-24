import pandas as pd

'''
This program finds the meaning of the input name
'''

def find_meaning(filename, fullname):
    '''
        This function return the meaning, name_single1, sn_vn1, rad1,
                                pic1, name_single2, sn_vn2, rad2, pic2
        of the input name.
        
        Parameter:
            - filename str: directory of the csv data file
            - fullname str: fullname
    '''
    name = fullname.lower().split()
    pf = pd.read_csv(filename).fillna("")
    left = 0
    right = len(pf) - 1
    
    if len(name) > 1: #user input more than 1 words 
        name = name[-2:]
        name = ' '.join(name) #only assess the firstname
    
        i = search(pf, name, 'name-double') 

        if i != -1:
            meaning = pf.iloc[i]['meaning']
            name_single1 = pf.iloc[i]['name-single1']
            sn_vn1 = pf.iloc[i]['sinovietnamese1']
            rad1 = pf.iloc[i]['radical1']
            pic1 = pf.iloc[i]['image1']
            name_single2 = pf.iloc[i]['name-single2']
            sn_vn2 = pf.iloc[i]['sinovietnamese2']
            rad2 = pf.iloc[i]['radical2']
            pic2 = pf.iloc[i]['image2']
        
        else: #no data 
            meaning = "Hiện tại chúng mình chưa có dữ liệu về tên của bạn :(" 
            name_single1 = ""
            sn_vn1 = ""
            rad1 = ""
            pic1 = ""
            name_single2 = ""
            sn_vn2 = ""
            rad2 = ""
            pic2 = ""
        
    else: #user only input 1 word 
        name = name[0] 
        i = search(pf, name, 'name-single2')

        if i != -1: 
            meaning = pf.iloc[i]['radical2']
            name_single1 = pf.iloc[i]['name-single2']
            sn_vn1 = pf.iloc[i]['sinovietnamese2']
            rad1 = pf.iloc[i]['radical2']
            pic1 = pf.iloc[i]['image2']
            name_single2 = ""
            sn_vn2 = ""
            rad2 = ""
            pic2 = ""
            
            
        else: #no data
            meaning = "Hiện tại chúng mình chưa có dữ liệu về tên của bạn :(" 
            name_single1 = ""
            sn_vn1 = ""
            rad1 = ""
            pic1 = ""
            name_single2 = ""
            sn_vn2 = ""
            rad2 = ""
            pic2 = ""
        

    return meaning, name_single1, sn_vn1, rad1, pic1, name_single2, sn_vn2, rad2, pic2

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
    print(find_meaning('final.csv',"An"))

    
if __name__ == '__main__':
        main()