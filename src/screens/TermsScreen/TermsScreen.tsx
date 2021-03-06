import React, { useState } from 'react';
import { View } from 'react-native';
import {
	Title,
	SpacerInline,
	NavBar,
	LinkButton,
} from '@elements';
import Terms from '@assets/documents/SampleToS';
import ScrollContainer from '../../elements/ScrollContainer/ScrollContainer';
import styles from './TermsScreen.styles';

export default () => {
	const [button, setButton] = useState(true);
	return (
		<>
			<View style={styles.titleContainer}>
				<View style={styles.title}>
					<Title text="Terms & conditions" />
				</View>
			</View>
			<View style={styles.outerContainer}>
				<SpacerInline height={20} />
				<ScrollContainer
					documentText={Terms}
					onScrollToEnd={() => { setButton(false); }}
				/>
				<SpacerInline height={40} />
				<LinkButton
					text="back"
					disabled={button}
					destination="RegistrationScreen"
				/>
			</View>
		</>
	);
};
