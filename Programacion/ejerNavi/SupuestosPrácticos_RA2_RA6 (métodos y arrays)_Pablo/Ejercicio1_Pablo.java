import java.util.*;

public class Ejercicio1_Pablo {

    final static Scanner teclado=new Scanner(System.in);
    final static int []f=new int[10];
    final static int[]b=new int[34];
    final static int[]a={0,1,2,3,4,5,6,7,8,9,10};
    final static double[]w=new double[99];

    public static void main(String[]args){


        menu();
        ejercicioA();
        ejercicioB();
        ejercicioC();
        ejercicioD();
        ejercicioE();
    }
    
    public static void menu(){

        System.out.println("Buenas ahora se iran realizando las siguientes opciones en orden");

    }

    public static void ejercicioA(){
        
        System.out.println("El valor del elemento 6 del array f es de : "+f[6]+".");
    
    }

    public static void ejercicioB(){

        int []g={8,8,8,8,8};

        for(int i=0;i<5;i++){

            System.out.println("valor de la posicion"+i+" es de "+g[i]);

        }

    }
    
    public static void ejercicioC(){

        double[]c=new double[99];
        double aux=0;

        for(int i=0;i<99;i++){
            
            aux+=aux+c[i];
        
        }

        System.out.println("la suma total de los 100 elementos es de "+aux+".");
    
    }
    public static void ejercicioD(){

        System.arraycopy(a, 0, b, 0, a.length);

        for (int i : b) {
            System.out.println(i + " ");
        }
    }

    //el metodo como tal funciona pero el array esta por defecto asi que todos los valores son 0.
    public static void ejercicioE(){

        double maximo=-4.00;
        double minimo=100.00;

        for (int i = 0; i < w.length-1; i++) {
            if (w[i] > maximo) {
                maximo = w[i];
            }
            if (w[i] < minimo) {
                minimo = w[i];
            }
        }
    
        System.out.println("El valor mas grande es de :"+maximo+".");
        System.out.println("El valor mas pequeño es de :"+minimo+".");
    }
        

}
