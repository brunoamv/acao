from django.db import models

class Comissoes(models.Model):
    sigla = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    indicado = models.CharField(max_length=200)
    condicao = models.CharField(max_length=200)


    def toJSON(self):
      comissoesJSON = {}
      comissoesJSON['id'] = str(self.pk)
      comissoesJSON['sigla'] = self.sigla
      comissoesJSON['nome'] = self.nome
      comissoesJSON['indicado'] = self.indicado
      comissoesJSON['condicao'] = self.condicao
      
      return comissoesJSON     

class Frentes(models.Model):
    sigla = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    ano = models.DateTimeField('date published') 


    def toJSON(self):
      frentesJSON = {}
      frentesJSON['id'] = str(self.pk)
      frentesJSON['sigla'] = self.sigla
      frentesJSON['nome'] = self.nome
      frentesJSON['tipo'] = self.tipo
      frentesJSON['ano'] = self.ano

      return frentesJSON  


class Parlamentar(models.Model):
    comissoes  = models.ManyToManyField(Comissoes)
    frentes  = models.ManyToManyField(Frentes)
    nome = models.CharField(max_length=200)
    uf = models.CharField(max_length=200)
    celular = models.CharField(max_length=200)
    telefone = models.CharField(max_length=200)
    fax = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    titular = models.CharField(max_length=200)
    gabinete = models.CharField(max_length=200)
    anexo = models.CharField(max_length=200)
    aniversario = models.DateTimeField('date published') 
    profissoes = models.CharField(max_length=200)
    nome_civil = models.CharField(max_length=200)
    tratamento = models.CharField(max_length=200)


    def toJSON(self):
      parlamentarJSON = {}
      parlamentarJSON['id'] = str(self.pk)
      parlamentarJSON['nome'] = self.nome
      parlamentarJSON['uf'] = self.uf
      parlamentarJSON['telefone'] = self.telefone
      parlamentarJSON['celular'] = self.celular
      parlamentarJSON['email'] = self.email
      
      return parlamentarJSON


   
    #partido = models.CharField(max_length=200)]
 
#class Choice(models.Model):
#    question = models.ForeignKey(Question, on_delete=models.CASCADE)
#    choice_text = models.CharField(max_length=200)
#    votes = models.IntegerField(default=0)