from django.template.context import RequestContext
from django.shortcuts import redirect, render_to_response
from .models import Parlamentar,Comissoes,Frentes
from django.http import HttpResponse
import simplejson

def go_to_index(request):
    responseDict = {}
    return render_to_response('index.html', responseDict, context_instance=RequestContext(request))

def go_to_parlamentares(request):
    responseDict = {}
    #parlamentares_list = []
    #parlamentares = Parlamentar.objects.all()
    #for parlamentar in parlamentares:
    #    parlamentares_list.append(parlamentar.toJSON())
    #responseDict['parlamentares'] = parlamentares_list
    return render_to_response('parlamentares.html', responseDict, context_instance=RequestContext(request))

def listar_parlamentares(request):

    responseDict = {}
    parlamentares_list = []
    parlamentares = Parlamentar.objects.all()
    for parlamentar in parlamentares:
        parlamentares_list.append(parlamentar.toJSON())
    responseDict['parlamentares'] = parlamentares_list
    return jsonResponse(responseDict)

def detail_parlamentares(request, id_parlamentar):
    responseDict = {}
    parlamentar = Parlamentar.objects.get(id=id_parlamentar)
    responseDict["parlamentar"] = parlamentar.toJSON()
    return render_to_response('parlamentares_detalhe.html', responseDict, context_instance=RequestContext(request))

def go_to_comissao(request):
    responseDict = {}
    return render_to_response('comissao.html', responseDict, context_instance=RequestContext(request))

def listar_comissoes(request):
    responseDict = {}
    comissoes_list = []
    comissoes = Comissoes.objects.all()
    for comissao in comissoes:
        comissoes_list.append(comissao.toJSON())
    responseDict['comissoes'] = comissoes_list
    return jsonResponse(responseDict)

def detail_comissao(request, id_comissao):
    responseDict = {}
    comissao = Comissoes.objects.get(id=id_comissao)
    responseDict["comissao"] = comissao.toJSON()
    return render_to_response('comissao_detalhe.html', responseDict, context_instance=RequestContext(request))

def go_to_frente(request):
    responseDict = {}
    return render_to_response('frente.html', responseDict, context_instance=RequestContext(request))

def listar_frentes(request):
    responseDict = {}
    frentes_list = []
    frentes = Frentes.objects.all()
    for frente in frentes:
        frentes_list.append(frente.toJSON())
    responseDict['frentes'] = frentes_list
    return jsonResponse(responseDict)

def detail_frente(request, id_frente):
    responseDict = {}
    frente = Frentes.objects.get(id=id_frente)
    responseDict["frente"] = frente.toJSON()
    return render_to_response('frente_detalhe.html', responseDict, context_instance=RequestContext(request))


def jsonResponse(responseDict):
   return HttpResponse(simplejson.dumps(responseDict), content_type='application/json')