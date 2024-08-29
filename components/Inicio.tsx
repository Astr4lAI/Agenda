import { Button, View, Text } from "react-native";

interface InicioProps {
    navigation: any;
}

const Inicio: React.FC<InicioProps> = ({ navigation }) => {
    return (
        <View>
            <Text>Bienvenidos</Text>
            <Button title = "Ver actividades"
                onPress = {() => navigation.navigate("Actividades")}
            />
        </View>
    );
};

export default Inicio;