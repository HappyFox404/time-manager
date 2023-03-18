import {
    Box,
    Column, Columns,
    ColumnSize,
    MarginType,
    PaddingType
} from "../modules/ui";
import {AppMenu} from "../modules/menu";
import {JoinClasses} from "../modules/ui/helpers/UIHelper";

export default function MainPage() : JSX.Element{
    return <Columns>
        <Column className={JoinClasses(PaddingType.P0, MarginType.M3)} style={{width: '300px'}} isNarrow={true}>
            <Box className={JoinClasses('outline', PaddingType.P4, MarginType.M2)}>
                <AppMenu/>
            </Box>
        </Column>
    </Columns>
}