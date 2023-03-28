import {
    Column,
    Columns,
    ColumnSize,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    MarginType,
    PaddingType
} from "../../ui";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {RegistrationForm} from "../components/RegistrationForm";

export function RegistrationPage() : JSX.Element{
    return <Columns>
        <Column className={JoinClasses(PaddingType.P0, MarginType.MXA)} size={ColumnSize.P40}>
            <Flex style={{height: '100vh'}} justifyContent={FlexJustifyContentType.Center} alignItems={FlexAlignItemsType.Center}>
                <RegistrationForm/>
            </Flex>
        </Column>
    </Columns>
}