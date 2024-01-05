import java.util.Scanner;

public class Ejercicio2_Pablo {
    
    final static Scanner teclado=new Scanner(System.in);

    public static void main(String[] args) {
    
        menu();

    }
    
    public static void menu(){

        int numero;
        byte contadorPar=0;
        byte contadorImpar=0;


        do {
            
        
        System.out.println("Buenas, ve introduciendo numeros y determinare si son par o impar.\nPara finalizar introduce un 0.");
            numero=teclado.nextInt();

            if (numero%2==0 && numero!=0) {
             
                contadorPar++;

                System.out.println(" el numero "+numero+" es par. Se han introducido "+contadorPar+" numeros pares");

            }
            
            if (numero%2!=0) {

                contadorImpar++;

                System.out.println("El numero "+numero+" es impar. Se han introducido "+contadorImpar+" numeros impares");
                
            }
            
        
        } while (numero!=0);
         
        }

}
