import {AppRequest} from "../../../constants/AppRequest";
import {
    Column,
    Columns,
    ColumnSize,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType, JoinClasses, MarginType,
    PaddingType
} from "../../ui";
import {AuthorizationForm} from "../components/AuthorizationForm";
//
export function AuthorizationPage() : JSX.Element{
    return <Columns>
        <Column className={JoinClasses(PaddingType.P0, MarginType.MXA)} size={ColumnSize.P40}>
            <Flex style={{height: '100vh'}} justifyContent={FlexJustifyContentType.Center} alignItems={FlexAlignItemsType.Center}>
                <AuthorizationForm/>
            </Flex>
        </Column>
    </Columns>
}