import {IconPlus} from '@tabler/icons-react';
import {LinkButton} from '@libs/design';

export function ContractsViewRightActions() {
	return (
		<LinkButton to={'/contracts/add'} leftIcon={<IconPlus size={18}/>}>
			Tilføj kontrakt
		</LinkButton>
	);
}
