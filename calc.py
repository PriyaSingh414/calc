import streamlit as st

def calculator(num1,num2,opr):
    if opr=="+":
        return num1+num2
    elif opr=="-":
        return num1-num2
    elif opr=="*":
        return num1*num2
    else:
        if num2!=0:
            return num1/num2
        else:
          return ("zero division not allow")
    
def main():
    st.title("Welcome ")
    n1=st.number_input("Enter number.",format="%2f")
    opr=st.selectbox("choose opr",["+","-","*","/"])
    n2=st.number_input("enter number.",format="%2f")
    result=calculator(n1,n2,opr)
    if st.button("calculate"):
        st.success(result)
if __name__=="__main__":
    main()