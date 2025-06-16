import {IconCoins, IconLicense} from '@tabler/icons-react';
import {HeaderLink} from '@libs/design';

export function OrganizationLink() {
	return (
		<HeaderLink
			url={'contracts'}
			label={'Organisation'}
			subLinks={[
				{
					id: 'contracts',
					url: 'contracts',
					label: 'Kontrakter',
					icon: IconLicense,
				},
				{
					id: 'financialsources',
					url: 'financialsources',
					label: 'Finanskilder',
					icon: IconCoins,
				},
			]}
		/>
	);
}
