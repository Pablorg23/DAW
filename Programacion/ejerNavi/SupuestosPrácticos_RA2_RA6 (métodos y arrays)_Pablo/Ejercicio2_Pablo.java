import java.util.*;
public class Ejercicio2_Pablo {
    
           final static int []t=new int[3];
           final static Scanner teclado= new Scanner(System.in);

    public static void main(String[]args){

        menu();
        ejercicioA();
        ejercicioB();
        ejercicioC();
        ejercicioD();
        ejercicioE();
        ejercicioF();
        ejercicioG();
        ejercicioH();
        ejercicioI();
        ejercicioJ();
    }
    
    public static void menu(){

        System.out.println("Buenas ahora se iran realizando las siguientes opciones en orden");

    }
    public static void ejercicioA(){

        //esta creado arriba.

    }

    public static void ejercicioB(){

        System.out.println("El array t tiene 3 filas");

    }
    
    public static void ejercicioC(){

        System.out.println("Ya que es unidimensional solo tiene 1.");

    }

    public static void ejercicioD(){

        System.out.println("El array t tiene"+t.length+" elementos.");

    }

    public static void ejercicioE(){

        System.out.println("las expresiones de acceso para todos los elementos de t "+t[0]+t[1]+t[2]);

    }

    public static void ejercicioF(){

        t[0]=0;
        t[1]=0;
        t[2]=0;

    }
    
    public static void ejercicioG(){

        for (int i = 0; i < 3; i++) {
            t[i] = 0;
        }

    }

    public static void ejercicioH(){

        for (int i = 0; i < 3; i++) {
            System.out.print("Ingrese el valor para t["+ i +":");
            t[i] = teclado.nextInt();
        }

    }

    public static void ejercicioI(){

        int min = t[0];
        for (int i = 1; i < 3; i++) {
            if (t[i] < min) {
                min = t[i];
            }
        }
        System.out.println("El valor más pequeño en t es: " + min);

    }

    public static void ejercicioJ(){
        
        System.out.printf("%d %d %d\n", t[0], t[1], t[2]);

    }
}
