import java.util.Scanner;

public class Ejercicio3_Pablo {
    
   final static Scanner teclado=new Scanner(System.in);

    public static void main(String[] args) {
        
        menu();
    }

    public static void menu(){

        int numero;
        byte contador=0;

        do{
        System.out.println("Buenas, introduce numeros y al final te dire cuantos has introducido. Para finaliar introduce un numero negativo");
            numero=teclado.nextInt();

            if (numero>=0) {
                contador++;
            }

        }while(numero>=0);

        System.out.println("La cantidad de numeros introducidos es de "+contador);
    }

}
