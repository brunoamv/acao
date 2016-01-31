from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings

urlpatterns = [
   url(r'^$', "acao.views.go_to_index"),     
   url(r'^parlamentares/$', "acao.views.go_to_parlamentares"),
   url(r'^parlamentares/(?P<id_parlamentar>[0-9])/$', "acao.views.detail_parlamentares"),
   url(r'^parlamentares/list/$', "acao.views.listar_parlamentares"),
   url(r'^comissao/$', "acao.views.go_to_comissao"),
   url(r'^comissao/(?P<id_comissao>[0-9])/$', "acao.views.detail_comissao"),
   url(r'^comissao/list/$', "acao.views.listar_comissoes"),
]

urlpatterns += [
   url(r'^static/(.*)$', "django.views.static.serve", {"document_root": settings.STATIC_PATH}), 
]


