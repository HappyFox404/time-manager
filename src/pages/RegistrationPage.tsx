import {
    Column,
    Columns,
    ColumnSize,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    MarginType,
    PaddingType
} from "../modules/ui";
import {JoinClasses} from "../modules/ui/helpers/UIHelper";
import {RegistrationForm} from "../modules/registration";

export default function RegistrationPage() : JSX.Element{
    return <Columns>
        <Column className={JoinClasses(PaddingType.P0, MarginType.MXA)} size={ColumnSize.P40}>
            <Flex style={{height: '100vh'}} justifyContent={FlexJustifyContentType.Center} alignItems={FlexAlignItemsType.Center}>
                <RegistrationForm/>
            </Flex>
        </Column>
    </Columns>
}