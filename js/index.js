//ȫ�ֱ���
var A;                  //��������A����װ����
var gs = 0;             //�ؿ� 0�����һ��
var x = 8; y = 7;       //���������һ�صĳ�ʼλ��
var bs = 0;             //�����ƶ��Ĳ���
var bx = 0;             //�����ƶ��ĸ���
var score = 0;          //����
var t;                  //ʱ�����
var name;               //�������ֵı���

//����  �����ֽ��ͣ�1��ƺ 2ǽ 3· 4�׻� 5�ƻ� 6���衿 
//gs��ʾ���� gs��ʾ�ڼ���
var ga = [
    [   //��һ��
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 6, 3, 6, 4, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 3, 6, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //�ڶ���
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 6, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 3, 2, 1, 2, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //������
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 6, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 3, 6, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 4, 4, 2, 3, 6, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 4, 4, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //���Ĺ�
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 6, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 6, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 4, 5, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //�����
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 6, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 2, 3, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 2, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 6, 3, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 3, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //������
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 3, 3, 4, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 6, 3, 6, 2, 4, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 3, 5, 3, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 4, 2, 6, 3, 6, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 2, 1, 1, 1, 1],
      [1, 1, 2, 3, 2, 2, 2, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1],
      [1, 1, 2, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1],
      [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //���߹�
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 6, 3, 6, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 6, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 3, 6, 3, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //�ڰ˹�   
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 4, 3, 6, 2, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 6, 3, 6, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 3, 6, 3, 6, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //�ھŹ�
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 3, 6, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 6, 3, 2, 2, 2, 3, 6, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 2, 4, 4, 4, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 2, 2, 3, 2, 4, 4, 4, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 3, 6, 3, 3, 6, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //��ʮ��
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 6, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
];

//��Ϸ����
init = function () {
    A = [];             //�����ԭ������
    extend(A, ga[gs]);  //���¸����鸳ֵ

    document.body.innerHTML = "";   //���ҳ������

    // ���div
    var warp = document.createElement("div");
    warp.className = "warp warp2";
    warp.id = "warp2";
    warp.style.cssText = "background:url('img/init.png')no-repeat center";
    document.body.appendChild(warp);

    //��ͼ����
    var map = document.createElement("div");
    map.className = "map";
    map.id = "map";
    warp.appendChild(map);

    //��ʼ��Ϸ
    var startdiv = document.createElement("div");
    startdiv.className = "startdiv wow swing animated";
    startdiv.id = "startdiv";
    startdiv.innerHTML = "START";
    startdiv.onclick = function () {
        map.removeChild(startdiv);      //�ѿ�ʼ��Ϸ�ĵ����Ƴ���
        starttime();                    //��ʼ��ʱ
    }
    map.appendChild(startdiv);

    //�����ⲿdiv
    var bottom = document.createElement("div");
    bottom.className = "bottom";
    warp.appendChild(bottom);

    //����
    var username = document.createElement("div");
    username.className = "username";
    username.id = "username";
    username.innerHTML = name;
    bottom.appendChild(username);

    //�ɼ�
    var score = document.createElement("div");
    score.className = "username score";
    score.id = "score";
    bottom.appendChild(score);

    //�ؿ�
    var level = document.createElement("div");
    level.className = "username level";
    level.id = "level";
    bottom.appendChild(level);

    //�����ƶ�����
    var box_num = document.createElement("div");
    box_num.className = "username level box_num";
    box_num.id = "box_num";
    bottom.appendChild(box_num);

    //�����ƶ�����
    var per_num = document.createElement("div");
    per_num.className = "username level per_num";
    per_num.id = "per_num";
    bottom.appendChild(per_num);

    //��ͣ��ť
    var again_btn = document.createElement("div");
    again_btn.className = "again_btn";
    again(again_btn);
    bottom.appendChild(again_btn);


    //����һ��
    var backstep = document.createElement("div");
    backstep.className = "backstep";
    backstep.id = "backstep";
    bottom.appendChild(backstep);

    //ʱ�������
    var wtime_bar = document.createElement("div");
    wtime_bar.className = "wtime_bar";
    bottom.appendChild(wtime_bar);

    //ʱ�������
    var time_bar = document.createElement("div");
    time_bar.className = "time_bar";
    time_bar.style.cssText = "width:100%";
    time_bar.id = "time_bar";
    wtime_bar.appendChild(time_bar);

    //���ز˵�
    var retinit = document.createElement("div");
    retinit.className = "retinit";
    retinit.id = "retinit";
    return_init(retinit);
    bottom.appendChild(retinit);

    //�̳�����ҳ��
    var i, j;   //i�������� j��������
    for (i = 0; i < 14; i++) {
        for (j = 0; j < 18; j++) {
            var m_div = document.createElement("div");
            m_div.className = "m_div";
            m_div.style.top = i * 53 + "px";    //�ϱ߾�
            m_div.style.left = j * 53 + "px";   //��߾�
            m_div.id = i + "-" + j;             //idֵ

            //��ά���� �����ֽ��ͣ�1��ƺ 2ǽ 3· 4�׻� 5�ƻ� 6���衿
            if (A[i][j] == 1) {
                m_div.style.backgroundImage = "url(img/1.png)";
            }
            if (A[i][j] == 2) {
                m_div.style.backgroundImage = "url(img/2.png)";
            }
            if (A[i][j] == 3) {
                m_div.style.backgroundImage = "url(img/3.png)";
            }
            if (A[i][j] == 4) {
                m_div.style.backgroundImage = "url(img/4.png)";
            }
            if (A[i][j] == 5) {
                m_div.style.backgroundImage = "url(img/5.png)";
            }
            if (A[i][j] == 6) {
                m_div.style.backgroundImage = "url(img/6.png)";
            }
            map.appendChild(m_div);
        }
    }
    personal();     //��������
    setHeight();    //���ø߶Ⱥ���
    music();        //��������
}

// ��������
personal = function () {
    var person = document.createElement("div");
    person.style.cssText = "width:53px;height:53px;background-image:url(img/bottom.png);position:absolute";
    person.style.top = y * 53 + "px";
    person.style.left = x * 53 + "px";
    person.id = "person";
    document.getElementById("map").appendChild(person);
}

// ��ά���鿽�� 
function getType(o) {
    var _t;
    return ((_t = typeof (o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
}
function extend(destination, source) {
    for (var p in source) {
        if (getType(source[p]) == "array" || getType(source[p]) == "object") {
            destination[p] = getType(source[p]) == "array" ? [] : {};
            arguments.callee(destination[p], source[p]);
        }
        else {
            destination[p] = source[p];
        }
    }
}

//��ά���� �����ֽ��ͣ�1��ƺ 2ǽ 3· 4�׻� 5�ƻ� 6���衿
//��������������ƶ�
pmove = function () {
    var k = event.keyCode;                              //����һ������k�������������ֵ   37�� 39�� 38�� 40��
    var p = document.getElementById("person");          //��ȡ����
    var backstep = document.getElementById("backstep"); //��ȡ����һ����ť
    var left = 0; right = 0; topp = 0; bottom = 0;      //�����ĸ����������ĸ������ж������Ƿ���Ժ���һ��
    var xz = 0;                                         //����һ�������ж������Ƿ���Ժ���

    //�жϼ��̰����µ�����һ���� 37�� 39�� 38�� 40��
    switch (k) {
        //��                                                                                                                                                           
        case 37:
            var box = document.getElementById(y + "-" + (x - 1));   //��ȡ����һ�������
            var lu = document.getElementById(y + "-" + (x - 2));    //��ȡ����һ�������
            //��һ���ǻ��� ��������·�������ӣ�
            if (A[y][x - 1] == 6 && A[y][x - 2] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //�ı�ͼƬ
                lu.style.backgroundImage = "url(img/6.png)";        //�ı�ͼƬ
                A[y][x - 1] = 3;                                    //�ı�����
                A[y][x - 2] = 6;                                    //�ı�����
                bx++;                                               //��������
                xz++;                                               //���Ժ���
            }
            //��һ���ǻ��� ���������յ㣨�����յ㣩
            if (A[y][x - 1] == 6 && A[y][x - 2] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x - 1] = 3;
                A[y][x - 2] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //��һ���ǻƻ� �������Ǹ��ӣ��ڸ������˻ƻ���
            if (A[y][x - 1] == 5 && A[y][x - 2] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x - 1] = 4;
                A[y][x - 2] = 5;
                bx++;
                xz++;
            }
            //��һ���ǻƻ� ��������·(��·���˻ƻ�)
            if (A[y][x - 1] == 5 && A[y][x - 2] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y][x - 1] = 4;
                A[y][x - 2] = 6;
                bx++;
                xz++;
            }
            //��һ����·
            if (A[y][x - 1] == 3 || A[y][x - 1] == 4) {
                p.style.backgroundImage = "url(img/left.png)";
                p.style.left = parseInt(p.style.left) - 53 + "px";
                x--;
                bs++;
                left++;
            }
            backleft(backstep, left, p, xz, box, lu);   //���ú���һ������
            passend();      //�ж��Ƿ�ͨ�غ���  
            break;

        case 39:
            var box = document.getElementById(y + "-" + (x + 1));   //��ȡ����һ�������   
            var lu = document.getElementById(y + "-" + (x + 2));    //��ȡ�������������
            //��һ���ǻ��� ��������·�������ӣ�
            if (A[y][x + 1] == 6 && A[y][x + 2] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //�ı�ͼƬ
                lu.style.backgroundImage = "url(img/6.png)";        //�ı�ͼƬ
                A[y][x + 1] = 3;                                    //�ı�����
                A[y][x + 2] = 6;                                    //�ı�����
                bx++;                                               //��������
                xz++;                                               //���Ժ���
            }
            //��һ���ǻ��� ���������յ㣨�����յ㣩
            if (A[y][x + 1] == 6 && A[y][x + 2] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x + 1] = 3;
                A[y][x + 2] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //��һ���ǻƻ� �������Ǹ��ӣ��ڸ������˻ƻ���
            if (A[y][x + 1] == 5 && A[y][x + 2] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x + 1] = 4;
                A[y][x + 2] = 5;
                bx++;
                xz++;
            }
            //��һ���ǻƻ� ��������·(��·���˻ƻ�)
            if (A[y][x + 1] == 5 && A[y][x + 2] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y][x + 1] = 4;
                A[y][x + 2] = 6;
                bx++;
                xz++;
            }
            //��һ����·
            if (A[y][x + 1] == 3 || A[y][x + 1] == 4) {
                p.style.backgroundImage = "url(img/right.png)";
                p.style.left = parseInt(p.style.left) + 53 + "px";
                x++;
                bs++;
                right++;
            }
            backright(backstep, right, p, xz, box, lu);
            passend();
            break;

        case 38:
            var box = document.getElementById((y - 1) + "-" + x);   //��ȡ����һ�������
            var lu = document.getElementById((y - 2) + "-" + x);    //��ȡ�������������
            //��һ���ǻ��� ��������·�������ӣ�
            if (A[y - 1][x] == 6 && A[y - 2][x] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //�ı�ͼƬ
                lu.style.backgroundImage = "url(img/6.png)";        //�ı�ͼƬ
                A[y - 1][x] = 3;                                    //�ı�����
                A[y - 2][x] = 6;                                    //�ı�����
                bx++;                                               //��������
                xz++;                                               //���Ժ���
            }
            //��һ���ǻ��� ���������յ㣨�����յ㣩
            if (A[y - 1][x] == 6 && A[y - 2][x] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y - 1][x] = 3;
                A[y - 2][x] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //��һ���ǻƻ� �������Ǹ��ӣ��ڸ������˻ƻ���
            if (A[y - 1][x] == 5 && A[y - 2][x] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y - 1][x] = 4;
                A[y - 2][x] = 5;
                bx++;
                xz++;
            }
            //��һ���ǻƻ� ��������·(��·���˻ƻ�)
            if (A[y - 1][x] == 5 && A[y - 2][x] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y - 1][x] = 4;
                A[y - 2][x] = 6;
                bx++;
                xz++;
            }
            //��һ����·
            if (A[y - 1][x] == 3 || A[y - 1][x] == 4) {
                p.style.backgroundImage = "url(img/top.png)";
                p.style.top = parseInt(p.style.top) - 53 + "px";
                y--;
                bs++;
                topp++;
            }
            backtop(backstep, topp, p, xz, box, lu);
            passend();
            break;

        case 40:
            var box = document.getElementById((y + 1) + "-" + x);   //��ȡ����һ�������
            var lu = document.getElementById((y + 2) + "-" + x);    //��ȡ�������������
            //��һ���ǻ��� ��������·�������ӣ�
            if (A[y + 1][x] == 6 && A[y + 2][x] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //�ı�ͼƬ
                lu.style.backgroundImage = "url(img/6.png)";        //�ı�ͼƬ
                A[y + 1][x] = 3;                                    //�ı�����
                A[y + 2][x] = 6;                                    //�ı�����
                bx++;                                               //��������
                xz++;                                               //���Ժ���
            }
            //��һ���ǻ��� ���������յ㣨�����յ㣩
            if (A[y + 1][x] == 6 && A[y + 2][x] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y + 1][x] = 3;
                A[y + 2][x] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //��һ���ǻƻ� �������Ǹ��ӣ��ڸ������˻ƻ���
            if (A[y + 1][x] == 5 && A[y + 2][x] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y + 1][x] = 4;
                A[y + 2][x] = 5;
                bx++;
                xz++;
            }
            //��һ���ǻƻ� ��������·(��·���˻ƻ�)
            if (A[y + 1][x] == 5 && A[y + 2][x] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y + 1][x] = 4;
                A[y + 2][x] = 6;
                bx++;
                xz++;
            }
            //��һ����·
            if (A[y + 1][x] == 3 || A[y + 1][x] == 4) {
                p.style.backgroundImage = "url(img/bottom.png)";
                p.style.top = parseInt(p.style.top) + 53 + "px";
                y++;
                bs++;
                bottom++;
            }
            backbottom(backstep, bottom, p, xz, box, lu);
            passend();
            break;

    }
    //��������Ϸ���棩
    if (document.getElementById("score")) {
        document.getElementById("score").innerHTML = score;
    }
    //�ؿ�����Ϸ���棩
    if (document.getElementById("level")) {
        document.getElementById("level").innerHTML = gs + 1;
    }
    //�����ƶ��ĸ�������Ϸ���棩
    if (document.getElementById("box_num")) {
        document.getElementById("box_num").innerHTML = bx;
    }
    //�����ƶ��Ĳ�������Ϸ���棩
    if (document.getElementById("per_num")) {
        document.getElementById("per_num").innerHTML = bs;
    }
    //�����ƶ��ĸ�����ʤ���������棩
    if (document.getElementById("gnum")) {
        document.getElementById("gnum").innerHTML = bx;
    }
    //�����ƶ��Ĳ�����ʤ���������棩
    if (document.getElementById("pnum")) {
        document.getElementById("pnum").innerHTML = bs;
    }
    //�����ƶ��ĸ�����ʧ�ܵ������棩
    if (document.getElementById("gnum2")) {
        document.getElementById("gnum2").innerHTML = bx;
    }
    //�����ƶ��Ĳ�����ʧ�ܵ������棩
    if (document.getElementById("pnum2")) {
        document.getElementById("pnum2").innerHTML = bs;
    }
}

//��ά���� �����ֽ��ͣ�1��ƺ 2ǽ 3· 4�׻� 5�ƻ� 6���衿
//���ˣ�37��
backleft = function (backstep, left, p, xz, box, lu) {
    backstep.onclick = function () {
        //���left��ֵ����1˵�������߶��ˣ������������һ��
        if (left == 1) {
            p.style.left = parseInt(p.style.left) + 53 + "px";
            x++;
            left = 0;
            //��ʱ�����Ѿ����ˣ�����������������Ѿ����˺õ�����½��е�
            if (xz == 1) {
                //������·�Ϻ���һ��
                if (A[y][x - 1] == 3 && A[y][x - 2] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x - 1] = 6;
                    A[y][x - 2] = 3;
                }
                //�ƻ���·�Ϻ���һ���׻�
                if (A[y][x - 1] == 3 && A[y][x - 2] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x - 1] = 6;
                    A[y][x - 2] = 4;
                }
                //�����ڸ��Ӻ���һ���ƻ�
                if (A[y][x - 1] == 4 && A[y][x - 2] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x - 1] = 5;
                    A[y][x - 2] = 3;
                }
                //�ƻ��ڸ��Ӻ���һ���ƻ�
                if (A[y][x - 1] == 4 && A[y][x - 2] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x - 1] = 5;
                    A[y][x - 2] = 4;
                }
            }
            xz = 0;
        }
    }
}

//���ˣ�39��
backright = function (backstep, left, p, xz, box, lu) {
    backstep.onclick = function () {
        //���right��ֵ����1˵�������߶��ˣ������������һ��
        if (right == 1) {
            p.style.left = parseInt(p.style.left) - 53 + "px";
            x--;
            right = 0;
            //��ʱ�����Ѿ����ˣ�����������������Ѿ����˺õ�����½��е�
            if (xz == 1) {
                //������·�Ϻ���һ��
                if (A[y][x + 1] == 3 && A[y][x + 2] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x + 1] = 6;
                    A[y][x + 2] = 3;
                }
                //�ƻ���·�Ϻ���һ���׻�
                if (A[y][x + 1] == 3 && A[y][x + 2] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x + 1] = 6;
                    A[y][x + 2] = 4;
                }
                //�����ڸ��Ӻ���һ���ƻ�
                if (A[y][x + 1] == 4 && A[y][x + 2] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x + 1] = 5;
                    A[y][x + 2] = 3;
                }
                //�ƻ��ڸ��Ӻ���һ���ƻ�
                if (A[y][x + 1] == 4 && A[y][x + 2] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x + 1] = 5;
                    A[y][x + 2] = 4;
                }
            }
            xz = 0;
        }
    }
}

//����(38)
backtop = function (backstep, top, p, xz, box, lu) {
    backstep.onclick = function () {
        //���topp��ֵ����1˵�������߶��ˣ������������һ��
        if (topp == 1) {
            p.style.top = parseInt(p.style.top) + 53 + "px";
            y++;
            topp = 0;
            //��ʱ�����Ѿ����ˣ�����������������Ѿ����˺õ�����½��е�
            if (xz == 1) {
                //������·�Ϻ���һ��
                if (A[y - 1][x] == 3 && A[y - 2][x] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y - 1][x] = 6;
                    A[y - 2][x] = 3;
                }
                //�ƻ���·�Ϻ���һ���׻�
                if (A[y - 1][x] == 3 && A[y - 2][x] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y - 1][x] = 6;
                    A[y - 2][x] = 4;
                }
                //�����ڸ��Ӻ���һ���ƻ�
                if (A[y - 1][x] == 4 && A[y - 2][x] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y - 1][x] = 5;
                    A[y - 2][x] = 3;
                }
                //�ƻ��ڸ��Ӻ���һ���ƻ�
                if (A[y - 1][x] == 4 && A[y - 2][x] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y - 1][x] = 5;
                    A[y - 2][x] = 4;
                }
            }
            xz = 0;
        }
    }
}

//����(40)
backbottom = function (backstep, bottom, p, xz, box, lu) {
    backstep.onclick = function () {
        //���bottom��ֵ����1˵�������߶��ˣ������������һ��
        if (bottom == 1) {
            p.style.top = parseInt(p.style.top) - 53 + "px";
            y--;
            bottom = 0;
            //��ʱ�����Ѿ����ˣ�����������������Ѿ����˺õ�����½��е�
            if (xz == 1) {
                //������·�Ϻ���һ��
                if (A[y + 1][x] == 3 && A[y + 2][x] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y + 1][x] = 6;
                    A[y + 2][x] = 3;
                }
                //�ƻ���·�Ϻ���һ���׻�
                if (A[y + 1][x] == 3 && A[y + 2][x] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y + 1][x] = 6;
                    A[y + 2][x] = 4;
                }
                //�����ڸ��Ӻ���һ���ƻ�
                if (A[y + 1][x] == 4 && A[y + 2][x] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y + 1][x] = 5;
                    A[y + 2][x] = 3;
                }
                //�ƻ��ڸ��Ӻ���һ���ƻ�
                if (A[y + 1][x] == 4 && A[y + 2][x] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y + 1][x] = 5;
                    A[y + 2][x] = 4;
                }
            }
            xz = 0;
        }
    }
}

//�ж��������Ƿ������� ��������Ӿͷ���false������ͷ���true
pass = function () {
    var m, n;
    for (m = 0; m < 14; m++) {
        for (n = 0; n < 18; n++) {
            if (A[m][n] == 6) {
                return false;   //����������Ӿͷ���false
            }
        }
    }
    return true;                //���û�����Ӿͷ���true
}

//�ؿ��ж� x���������ʼ�ĺ�����  y���������ʼ��������     bs,bx�ǰѱ�����ֵ��Ϊ0
selectgs = function (gs) {
    //��һ��
    if (gs == 0) {
        x = 8;
        y = 7;
    }
    //�ڶ���
    if (gs == 1) {
        x = 5;
        y = 3;
    }
    //������
    if (gs == 2) {
        x = 5;
        y = 6;
    }
    //���Ĺ�
    if (gs == 3) {
        x = 5;
        y = 5;
    }
    //�����
    if (gs == 4) {
        x = 6;
        y = 3;
    }
    //������
    if (gs == 5) {
        x = 12;
        y = 9;
    }
    //���߹�
    if (gs == 6) {
        x = 11;
        y = 6;
    }
    //�ڰ˹�
    if (gs == 7) {
        x = 11;
        y = 6;
    }
    //�ھŹ�
    if (gs == 8) {
        x = 10;
        y = 9;
    }
    //��ʮ��
    if (gs == 9) {
        x = 5;
        y = 8;
    }
    bs = 0;     //��bs��ֵ�ָ�Ϊ0
    bx = 0;     //��bx��ֵ�ָ�Ϊ0
    score = 0;  //��score��ֵ�ָ�Ϊ0
}

//ͨ�ص���
passend = function () {
    var a = pass();     //���ú���
    if (a == true) {
        //�����ǰ��9�ؾ͵�����һ�ص���ʾ����
        if (gs !== 10) {
            success();
        }
        //����ǵ�ʮ�ؾ͵������йؿ��Ѿ��ɹ�ͨ��
        if (gs == 9) {
            endsuccess();
        }
    }
}

//ǰ�Źصĵ���
success = function () {
    clearInterval(t);   //����ʱ ֹͣ��ʱ
    no_music();         //ʱ�䵽 ����ֹͣ����


    //���div
    var sdiv = document.createElement("div");
    sdiv.className = "sdiv";
    sdiv.id = "successdiv";
    document.getElementById("warp2").appendChild(sdiv);

    //�����ƶ��Ĳ���
    var pnum = document.createElement("div");
    pnum.className = "pnum";
    pnum.id = "pnum";
    sdiv.appendChild(pnum);

    //�����ƶ��ĸ���
    var gnum = document.createElement("div");
    gnum.className = "pnum gnum";
    gnum.id = "gnum";
    sdiv.appendChild(gnum);

    //��һ�ذ�ť
    var next = document.createElement("div");
    next.className = "next";
    next.id = "next";
    next.onclick = function () {
        document.body.innerHTML = "";   //���ҳ������
        gs++;                           //�ؿ�+1
        A = ga[gs];                     //��ȡ����
        selectgs(gs);                   //�жϵڼ���
        init();                         //���¼���ҳ��
    }
    sdiv.appendChild(next);

    //���õ�����top leftֵ
    if (document.getElementById("sdiv")) {
        var BW = document.body.clientWidth;     //��ȡ��Ļ���
        var BH = document.body.clientHeight;     //��ȡ��Ļ�߶� 
        var sdiv = document.getElementById("sdiv");
        var W_sdiv = document.getElementById("sdiv").offsetWidth;
        var H_sdiv = document.getElementById("sdiv").offsetHeight;
        sdiv.style.top = (BH - H_sdiv) / 2;
        sdiv.style.left = (BW - W_sdiv) / 2;
    }
    sl();   //������Ϸʤ����Ч
}

//���һ�ص���
endsuccess = function () {

    //���div
    var enddiv = document.createElement("div");
    enddiv.className = "enddiv";
    enddiv.id = "enddiv";
    document.getElementById("warp2").appendChild(enddiv);

    //����һ�ΰ�ť
    var endding = document.createElement("div");
    endding.className = "endding";
    endding.id = "endding";
    endding.onclick = function () {
        document.body.innerHTML = "";   //���ҳ������
        gs = 0;                         //�ѹؿ�����Ϊ��һ��
        A = ga[gs];                     //��������
        selectgs(gs);                   //�жϵڼ���
        init();                         //���¼��غ���
    }
    enddiv.appendChild(endding);

    //���õ�����top leftֵ
    if (document.getElementById("enddiv")) {
        var BW = document.body.clientWidth;     //��ȡ��Ļ���
        var BH = document.body.clientHeight;     //��ȡ��Ļ�߶� 
        var enddiv = document.getElementById("enddiv");
        var W_enddiv = document.getElementById("enddiv").offsetWidth;
        var H_enddiv = document.getElementById("enddiv").offsetHeight;
        enddiv.style.top = (BH - H_enddiv) / 2;
        enddiv.style.left = (BW - W_enddiv) / 2;
    }
}

//��Ϸʧ�ܵ���
fail = function () {

    //���div
    var fdiv = document.createElement("div");
    fdiv.className = "fdiv";
    fdiv.id = "fdiv";
    document.getElementById("warp2").appendChild(fdiv);

    //�����ƶ��Ĳ���
    var pnum = document.createElement("div");
    pnum.className = "pnum";
    pnum.id = "pnum2";
    fdiv.appendChild(pnum);

    //�����ƶ��Ĳ���
    var gnum = document.createElement("div");
    gnum.className = "pnum gnum";
    gnum.id = "gnum2";
    fdiv.appendChild(gnum);

    //���汾�ذ�ť
    var again = document.createElement("div");
    again.className = "next";
    again.onclick = function () {
        document.body.innerHTML = "";   //���ҳ������
        A = ga[gs];                     //����
        selectgs(gs);                   //�жϵڼ���
        init();                         //���غ���
    }
    fdiv.appendChild(again);

    //���õ�����top leftֵ
    if (document.getElementById("fdiv")) {
        var BW = document.body.clientWidth;     //��ȡ��Ļ���
        var BH = document.body.clientHeight;     //��ȡ��Ļ�߶� 
        var sdiv = document.getElementById("fdiv");
        var W_fdiv = document.getElementById("fdiv").offsetWidth;
        var H_fdiv = document.getElementById("fdiv").offsetHeight;
        fdiv.style.top = (BH - H_fdiv) / 2;
        fdiv.style.left = (BW - W_fdiv) / 2;
    }
    sl();
}

//ѡ��ؿ�
selgs = function () {

    //����
    var seldiv = document.createElement("div");
    seldiv.className = "seldiv wow fadeInDown animated";
    seldiv.id = "seldiv";
    document.getElementById("warp").appendChild(seldiv);

    //�رհ�ť
    var selclose = document.createElement("div");
    selclose.className = "selclose";
    selclose.onclick = function () {
        document.getElementById("warp").removeChild(seldiv);    //����رհ�ť��ʱ�򣬰ѵ���div��warp�������Ƴ�
    }
    seldiv.appendChild(selclose);

    //�����ڿ�
    var selwarp = document.createElement("div");
    selwarp.className = "selwarp";
    seldiv.appendChild(selwarp);

    //����forѭ������ʮ��ѡ�صľ���
    for (var i = 0; i < 10; i++) {
        //���ͼƬ������
        var a = ["11.png", "22.png", "33.png", "44.png", "55.png", "66.png", "77.png", "88.png", "99.png", "1010.png"];

        //���div
        var swdiv = document.createElement("div");
        swdiv.className = "swdiv";
        swdiv.style.backgroundImage = "url(" + "img/" + a[i] + ")";
        choosegs(swdiv, i);
        selwarp.appendChild(swdiv);

        //�ж��ұ߾࣬���ĸ��͵ڰ˸����ε��ұ߾�Ϊ0
        if (i == 3 || i == 7) {
            swdiv.style.marginRight = "0px";
        }
        //�ж��ϱ߾࣬ǰ�ĸ����ε��ϱ߾�Ϊ0
        if (i == 0 || i == 1 || i == 2 || i == 3) {
            swdiv.style.marginTop = "0px";
        }
    }

    //����ѡ��ؿ�������marginֵ
    if (document.getElementById("seldiv")) {
        var BW = document.body.clientWidth;                             //��ȡ��Ļ���
        var BH = document.body.clientHeight;                            //��ȡ��Ļ�߶� 
        var W_warp = document.getElementById("warp").offsetWidth;       //��ȡ���Ŀ��
        var H_warp = document.getElementById("warp").offsetHeight;      //��ȡ���ĸ߶�
        var W_seldiv = document.getElementById("seldiv").offsetWidth;   //��ȡ�����Ŀ��
        var H_seldiv = document.getElementById("seldiv").offsetHeight;  //��ȡ�����ĸ߶�
        var seldiv = document.getElementById("seldiv");                 //��ȡ�����ľ���

        a = (BW - W_warp) / 2;
        b = (W_warp - W_seldiv) / 2;
        seldiv.style.left = a + b;      //��������߾�=�����ξ�����Ļ����߾�+�������ξ���������߾�

        c = (BH - H_warp) / 2;
        d = (H_warp - H_seldiv) / 2;
        seldiv.style.top = c + d;       //�������ϱ߾�=�����ξ�����Ļ���ϱ߾�+�������ξ��������ϱ߾�
    }
}

//ѡ��ؿ����뺯��  s��ʾ�����ľ��Σ�i��ʾ�����ľ����ǵڼ���
choosegs = function (s, i) {
    s.onclick = function () {
        document.body.innerHTML = "";   //�����ҳ��ԭ��������
        gs = i;                         //������i��������ֵ����gs
        A = ga[gs];                     //Ȼ���������
        selectgs(gs);                   //�ж��ǵڼ���
        init();                         //���¼�����Ϸ���溯��
    }
}

//���а�
list = function () {
    //����
    var listdiv = document.createElement("div");
    listdiv.className = "listdiv wow fadeInDown animated";
    listdiv.id = "listdiv";
    document.getElementById("warp").appendChild(listdiv);

    //�رհ�ť
    var listclose = document.createElement("div");
    listclose.className = "listclose selclose";
    listclose.onclick = function () {
        document.getElementById("warp").removeChild(listdiv);
    }
    listdiv.appendChild(listclose);

    //�����ݿ��ȡ����
    //    U.A.Request("http://cd.1473.cn/net", (["10.3.16.56", "boxgame", "select_gamedate", 1]), function (r) {
    //        var a = r.value;
    //    })
    var date = [
                ["������", "��һ��", "10", "10", "100��"],
                ["zengjiena", "�ڶ���", "20", "20", "90��"],
                ["zjn", "������", "30", "30", "80��"],
                ["123", "���Ĺ�", "40", "40", "70��"],
                ["������", "�����", "50", "50", "60��"],
                ["������", "������", "60", "60", "50��"]
               ];
    for (var c = 0; c < 6; c++) {
        //�ⲿdiv
        var lwarp = document.createElement("div");
        lwarp.className = "lwarp";
        listdiv.appendChild(lwarp);

        //�û��ǳ�
        var lname = document.createElement("div");
        lname.className = "lname";
        lname.style.cssText = "margin-left:0px";
        lname.innerHTML = date[c][0];
        lwarp.appendChild(lname);

        //�ؿ�
        var lgs = document.createElement("div");
        lgs.className = "lgs lname";
        lgs.innerHTML = date[c][1];
        lwarp.appendChild(lgs);

        //�����ƶ�����
        var lbs = document.createElement("div");
        lbs.className = "lbs lname";
        lbs.innerHTML = date[c][2];
        lwarp.appendChild(lbs);

        //�����ƶ�����
        var lbx = document.createElement("div");
        lbx.className = "lbs lname";
        lbx.innerHTML = date[c][3];
        lwarp.appendChild(lbx);

        //����
        var ll = document.createElement("div");
        ll.className = "ll lname";
        ll.innerHTML = date[c][4];
        lwarp.appendChild(ll);

        if (c == 0) {
            lwarp.style.marginTop = "175px";
        }
    }

    //�������а񵯴���marginֵ
    if (document.getElementById("listdiv")) {
        var BW = document.body.clientWidth;                             //��ȡ��Ļ���
        var BH = document.body.clientHeight;                            //��ȡ��Ļ�߶� 
        var W_warp = document.getElementById("warp").offsetWidth;       //��ȡ���Ŀ��
        var H_warp = document.getElementById("warp").offsetHeight;      //��ȡ���ĸ߶�
        var W_listdiv = document.getElementById("listdiv").offsetWidth;   //��ȡ�����Ŀ��
        var H_listdiv = document.getElementById("listdiv").offsetHeight;  //��ȡ�����ĸ߶�
        var listdiv = document.getElementById("listdiv");                 //��ȡ�����ľ���

        a = (BW - W_warp) / 2;
        b = (W_warp - W_listdiv) / 2;
        listdiv.style.left = a + b;         //��������߾�=�����ξ�����Ļ����߾�+�������ξ���������߾�

        c = (BH - H_warp) / 2;
        d = (H_warp - H_listdiv) / 2;
        listdiv.style.top = c + d;       //�������ϱ߾�=�����ξ�����Ļ���ϱ߾�+�������ξ��������ϱ߾�
    }
}

//��Ϸ˵��
play = function () {
    //����
    var pdiv = document.createElement("div");
    pdiv.className = "pdiv wow fadeInDown animated";
    pdiv.id = "pdiv";
    document.getElementById("warp").appendChild(pdiv);

    //�رհ�ť
    var pclose = document.createElement("div");
    pclose.className = "pclose selclose";
    pclose.onclick = function () {
        document.getElementById("warp").removeChild(pdiv);  //������رհ�ť��ʱ�򣬰ѵ����Ӹ���div���Ƴ���
    }
    pdiv.appendChild(pclose);

    //������Ϸ˵��������marginֵ
    if (document.getElementById("pdiv")) {
        var BW = document.body.clientWidth;                             //��ȡ��Ļ���
        var BH = document.body.clientHeight;                            //��ȡ��Ļ�߶� 
        var W_warp = document.getElementById("warp").offsetWidth;       //��ȡ���Ŀ��
        var H_warp = document.getElementById("warp").offsetHeight;      //��ȡ���ĸ߶�
        var W_pdiv = document.getElementById("pdiv").offsetWidth;   //��ȡ�����Ŀ��
        var H_pdiv = document.getElementById("pdiv").offsetHeight;  //��ȡ�����ĸ߶�
        var pdiv = document.getElementById("pdiv");                 //��ȡ�����ľ���

        a = (BW - W_warp) / 2;
        b = (W_warp - W_pdiv) / 2;
        pdiv.style.left = a + b;         //��������߾�=�����ξ�����Ļ����߾�+�������ξ���������߾�

        c = (BH - H_warp) / 2;
        d = (H_warp - H_pdiv) / 2;
        pdiv.style.top = c + d;       //�������ϱ߾�=�����ξ�����Ļ���ϱ߾�+�������ξ��������ϱ߾�
    }
}

//���ز˵�
return_init = function (r) {
    r.onclick = function () {
        document.body.innerHTML = "";

        //���div
        var warp = document.createElement("div");
        warp.className = "warp";
        warp.id = "warp";
        document.body.appendChild(warp);

        //��ʼ��Ϸ��ť
        var initt = document.createElement("div");
        initt.className = "init";
        initt.id = "init";
        initt.onclick = function () {
            init();
        }
        warp.appendChild(initt);

        //ѡ��ؿ���ť
        var selece = document.createElement("div");
        selece.className = "selece init";
        selece.id = "selece";
        selece.onclick = function () {
            selgs();
        }
        warp.appendChild(selece);

        //���а�ť
        var listt = document.createElement("div");
        listt.className = "list init";
        listt.id = "list";
        listt.onclick = function () {
            list();
        }
        warp.appendChild(listt);

        //��Ϸ˵����ť
        var playy = document.createElement("div");
        playy.className = "select init play";
        playy.id = "play";
        playy.onclick = function () {
            play();
        }
        warp.appendChild(playy);

        //���ø߶�
        var BW = document.body.clientWidth;
        var BH = document.body.clientHeight;
        var W_warp = document.getElementById("warp").offsetWidth;
        var H_warp = document.getElementById("warp").offsetHeight;
        warp.style.marginTop = (BH - H_warp) / 2;
        warp.style.marginLeft = (BW - W_warp) / 2;
    }
}

//ʱ�������
gametime = function () {
    if (document.getElementById("time_bar")) {
        var time_bar = document.getElementById("time_bar");
        time_bar.style.width = parseInt(time_bar.style.width) - 1 + "%";
        //time_bar.innerHTML = time_bar.style.width;
        if (time_bar.style.width == "0%") {
            clearInterval(t);   //�����ʱ��
            fail();             //����ʧ�ܵ���
        }
    }
}

//��ʼ��ʱ
starttime = function () {
    t = setInterval(function () { gametime(); }, 5000);     //��ʱ��-ÿ5000����͵���gametime����
}

//���汾��
again = function (a) {
    a.onclick = function () {
        document.body.innerHTML = "";   //���ҳ������
        A = ga[gs];                     //����
        selectgs(gs);                   //�жϵڼ���
        init();                         //����ҳ��
    }
}

//�����չغ���
CMP = function () {
    var CMP_name = document.getElementById("CMP_name").value;       //�Ȼ�ȡ�û�������ǳ�
    name = CMP_name;
    var CMP = document.getElementById("CMP");
    document.getElementById("warp").removeChild(CMP);
}

//����������Ϸ
CMP_init = function () {
    var btn = document.getElementById("CMP_btn");
    btn.onclick = function () {
        var CMP_name = document.getElementById("CMP_name").value;       //�Ȼ�ȡ�û�������ǳ�
        name = CMP_name;                                                //Ȼ����ǳƸ���ȫ�ֱ���name
        document.body.innerHTML = "";                                   //���ҳ��
        init();                                                         //���غ���
    }
}

//�߶�
setHeight = function () {
    var BW = document.body.clientWidth;     //��ȡ��Ļ���
    var BH = document.body.clientHeight;     //��ȡ��Ļ�߶� 

    //������ʼҳ��marginֵ
    if (document.getElementById("warp")) {
        var warp = document.getElementById("warp");
        var W_warp = document.getElementById("warp").offsetWidth;
        var H_warp = document.getElementById("warp").offsetHeight;
        warp.style.marginTop = (BH - H_warp) / 2;
        warp.style.marginLeft = (BW - W_warp) / 2;
    }

    //������Ϸ��ʼ�����maiginֵ
    if (document.getElementById("warp2")) {
        var warp2 = document.getElementById("warp2");
        var W_warp2 = document.getElementById("warp2").offsetWidth;
        var H_warp2 = document.getElementById("warp2").offsetHeight;
        warp2.style.marginTop = (BH - H_warp2) / 2;
        warp2.style.marginLeft = (BW - W_warp2) / 2;
    }
}

//��Ϸ��Ч
music = function () {
    var mp3 = document.createElement("embed");
    mp3.style.cssText = "width:0px;height:0px;";
    mp3.src = "music.mp3";
    mp3.id = "mp3";
    mp3.hidden = "true";    //��������Ƿ���ʾ
    mp3.autostart = "true"; //�Ƿ��Զ�����
    mp3.loop = "true";      //�Ƿ�ѭ������
    document.getElementById("warp2").appendChild(mp3);
}

//�����Ϸ��Ч
no_music = function () {
    if (document.getElementById("mp3")) {
        var mp3 = document.getElementById("mp3");
        document.getElementById("warp2").removeChild(mp3);  //�����Ϸ��Ч
    }
}

//��Ϸʤ����Ч
sl = function () {
    if (document.getElementById("successdiv")) {
        var sl = document.createElement("embed");
        sl.style.cssText = "width:0px;height:0px;";
        sl.src = "sl.mp3";
        sl.id = "sl";
        sl.hidden = "true";    //��������Ƿ���ʾ
        sl.autostart = "true"; //�Ƿ��Զ�����
        sl.loop = "true";      //�Ƿ�ѭ������
        document.getElementById("successdiv").appendChild(sl);
    }
}

document.onkeydown = pmove; //���û���������ϵ�������ʹ���pmove�������
new WOW().init();           //����Ч��
window.onload = function () {
    setHeight();
}