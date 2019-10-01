import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 0 24px 0 24px;
    background-color: #757575;
`;


export const FieldSearch = styled.TextInput`
    width: 100%;
    padding: 80px 13px 0 13px;
    margin-right: 35px;
`;

export const CardGroup = styled.View`
    margin-top: 24px;
    width: 100%;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #dee0e2;
`;

export const CardGroupText = styled.TextInput`
    flex: 1;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
    color: #fff;
`;