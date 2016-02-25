from django.db import models


class Parlamentar(models.Model):
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
      parlamentarJSON['fax'] = self.fax
      parlamentarJSON['titular'] = self.titular
      parlamentarJSON['gabinete'] = self.gabinete
      parlamentarJSON['anexo'] = self.anexo
      parlamentarJSON['aniversario'] = str(self.aniversario)
      parlamentarJSON['profissoes'] = self.profissoes
      parlamentarJSON['nome_civil'] = self.nome_civil
      parlamentarJSON['tratamento'] = self.tratamento
      
      return parlamentarJSON


class Comissoes(models.Model):
    sigla = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    indicado = models.CharField(max_length=200)
    condicao = models.CharField(max_length=200)
    parlamentar = models.ManyToManyField(Parlamentar, through='ComissaoParlamentar')

    def toJSON(self):
      comissoesJSON = {}
      comissoesJSON['id'] = str(self.pk)
      comissoesJSON['sigla'] = self.sigla
      comissoesJSON['nome'] = self.nome
      comissoesJSON['indicado'] = self.indicado
      comissoesJSON['condicao'] = self.condicao
      
      return comissoesJSON     


class ComissaoParlamentar(models.Model):
    comissao = models.ForeignKey(Comissoes, on_delete=models.CASCADE)
    parlamentar = models.ForeignKey(Parlamentar, on_delete=models.CASCADE)
    date_joined = models.DateField()
    invite_reason = models.CharField(max_length=64)

    def toJSON(self):
      comissaoParlamentar = {}
      comissaoParlamentar['id'] = str(self.pk)
      comissaoParlamentar['comissao'] = self.comissao_id
      comissaoParlamentar['parlamentar'] = self.parlamentar_id
      comissaoParlamentar['date_joined'] = self.date_joined
      comissaoParlamentar['invite_reason'] = self.invite_reason

      return frenteParlamentar  

class Frente(models.Model):
    sigla = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    ano = models.DateTimeField('date published') 
    parlamentar = models.ManyToManyField(Parlamentar, through='FrenteParlamentar')

    def toJSON(self):
      frenteJSON = {}
      frenteJSON['id'] = str(self.pk)
      frenteJSON['sigla'] = self.sigla
      frenteJSON['nome'] = self.nome
      frenteJSON['tipo'] = self.tipo
      frenteJSON['ano'] = str(self.ano)

      return frenteJSON  

class FrenteParlamentar(models.Model):
    frente = models.ForeignKey(Frente, on_delete=models.CASCADE)
    parlamentar = models.ForeignKey(Parlamentar, on_delete=models.CASCADE)
    date_joined = models.DateField()
    invite_reason = models.CharField(max_length=64)

    def toJSON(self):
      frenteParlamentar = {}
      frenteParlamentar['id'] = str(self.pk)
      frenteParlamentar['frente'] = self.frente_id
      frenteParlamentar['parlamentar'] = self.parlamentar_id
      frenteParlamentar['date_joined'] = self.date_joined
      frenteParlamentar['invite_reason'] = self.invite_reason

      return frenteParlamentar  

#class Choice(models.Model):
#    question = models.ForeignKey(Question, on_delete=models.CASCADE)
#    choice_text = models.CharField(max_length=200)
#    votes = models.IntegerField(default=0)